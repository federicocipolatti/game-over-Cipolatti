import { useContext, useState, useRef } from "react"
import CartContext from "../../context/CartContext/CartContext"
import { Card, Button } from 'react-bootstrap';
import './Cart.css';
import { addDoc, collection, doc, getDocs, writeBatch, getDoc, Timestamp } from 'firebase/firestore';
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/Notifications/NotificationServices";
import Togglable from "../Toogleable/Toogleble";
import ContactForm from "../ContactForm/ContactForm";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [contact, setContact] = useState({
        name:'',
        phone:'',
        address:'',
        comment:''
    });

    const { products, removeItem, getTotal, clearCart } = useContext(CartContext)
    const contactFormRef = useRef()

    const setNotification = useNotificationServices()
        

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)
            
            const objOrder = {
                buyer: contact,
                items: products,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []

            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data()})    
                    }
                })
            })

            if(outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        clearCart()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                    removeItem(prod.id)
                })          
            }
        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }
    

    if(processingOrder) {
        return <h1>Se está procesando su orden</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id) => {
        removeItem(id)
    }

    return ( 
        <div>
            <h1>Cart</h1>
            { products.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <Button variant="outline-dark" style={{margin:'5px'}} onClick={() => clearCart()}>Cancelar compra</Button>
            <Button variant="outline-dark" onClick={() => confirmOrder()}>Confirmar compra</Button>
            {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <Button variant="outline-dark" 
                                onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </Button>
                    </div>    
            }
            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>          
        </div>
    )  
}

export default Cart