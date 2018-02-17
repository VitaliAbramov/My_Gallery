# My_Gallery
This gallery application is written in MEAN stack.
The backend is restful API using Node.
The frontend is single page application using Angular 1.2.


## Database: 
mongodb should have a db name `gallery` and collection name `images` with objects with this format:
```js
 { 
 "url" : "http://www.theresident.co.uk/wp-content/uploads/sites/10/2015/08/petspyjamas-2.jpg", 
 "name" : "dog01" 
 }
{
"url" : "http://www.bouliblog.com/wp-content/uploads/2017/03/origines-bouledogue-francais.jpg", 
"name" : "dog02" 
}
```
assuming `mongod` is running.

## Server:
to run the backend API: 
```
npm start
```
assuming that port 3000 is available.

## client:
to run the client API: 
```
http-server
```
assuming that port 8080 is available.

# Demo 

![alt text](https://github.com/VitaliAbramov/My_Gallery/blob/maste/screen_shots/image01.png)

The gallery should look like the image above.