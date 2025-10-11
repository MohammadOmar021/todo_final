import express from 'express'
import {product} from './product.js'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import { json } from 'stream/consumers';
import mongoose from 'mongoose';
import userModel from './Models/userSchema.js';
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
const PORT = 3000;

app.get('/', (req, res)=>{

    res.send("Server Running")

})


const URI = 'mongodb+srv://admin:admin123@cluster0.suv6jcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI)
.then(res=>{console.log("Database connected")})
.catch(err=>console.log(err.message))

// app.post('/createUser', (req, res)=>{

//         console.log('req', req.body)
//         res.send("data Recieve")
// })


app.get('/products', (req, res)=>{

    console.log(req.url)
    res.send(product)
})

app.get('/products/:id', (req, res)=>{

        //console.log("query params", req.params.id)
        const findProduct = product.find((obj)=>{

            if(obj.id == req.params.id){
                return obj
            }
            else{
                res.send("Product not found")
            }
        })
        res.send(findProduct)


})


    // app.post('/createUser', (req, res)=>{

    //         const userExist = fs.existsSync('user.txt')
    //         //console.log(req.body)
    //         const body = {...req.body, id: uuidv4()}
            
    //         if(userExist){
    //             const userData = JSON.parse(fs.readFileSync('user.txt', 'utf-8'))
    //             userData.push(body)
    //             fs.writeFileSync('user.txt', JSON.stringify(userData))
    //             res.json({
    //                 message : "user added"
    //             })
    //         }else{

    //             const arr = [];
    //             arr.push(body);
    //             fs.writeFileSync('user.txt', JSON.stringify(arr))
    //             res.json({
    //                 message : "user created"
    //             })

    //         }
    // })

    app.get('/getUser', (req, res)=>{
            const data = fs.readFileSync('user.txt', 'utf-8')
            res.send(data)
    })

    app.get('/getUser/:id', (req, res)=>{
            console.log(req.params.id)
            const data = JSON.parse(fs.readFileSync('user.txt', 'utf-8'))
            const obje = data.find(obj=>obj.id==req.params.id)
            res.send(obje)
            console.log(obje)
    })

        app.put('/updateUser/:id', (req, res)=>{
            const data = JSON.parse(fs.readFileSync('user.txt', 'utf-8'))
            const updateUser = data.map((obj)=>{
                if(obj.id==req.params.id){
                    const updateObj = {...obj, ...req.body}
                    console.log("updateObj", updateObj)
                    return updateObj;
                }else{

                    return obj;
                }
            })

            console.log("updateUser", updateUser)
            fs.writeFileSync('user.txt', JSON.stringify(updateUser))
            res.json({
                message : "User Updated!"
            })
        })

        app.delete('/deleteUser/:id', (req, res)=>{
                const allUsers = JSON.parse(fs.readFileSync('user.txt', 'utf-8'));
                const deleteUser = allUsers.findIndex(obj=>obj.id==req.params.id)
                if (deleteUser) {
                       allUsers.splice(deleteUser,1) 
                      fs.writeFileSync('user.txt', JSON.stringify(allUsers))
                      res.send("User Deleted")
                } else{
                    res.status(404).send("User not Exist")
                }  
                
                
        })



        app.post('/createUser', async (req, res)=>{
                try {
                    const body = req.body;
                await userModel.create(body)
                res.send("User Created Success!")
                } catch (error) {
                    res.send(err)
                }
        })



        

app.listen(PORT, ()=>console.log(`Server is Running on http://localhost:${PORT}`))
