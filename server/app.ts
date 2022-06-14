import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.get('/', function(req,res){
        res.sendFile(__dirname +'/build/index.html')
});

app.listen(3000, ()=>{
    console.log('server is running')
})