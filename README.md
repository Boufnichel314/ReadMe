
# ReadMe

An online library where you can buy some books with hight quality and get as soon as possible

## Demo

https://boufnichel314.github.io/ReadMe/


## Installation

git clone https://github.com/Boufnichel314/ReadMe.git

```bash
  
  cd ReadMe
  npm start
```
    
## Google books API

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_key` | `string` | The API KEY |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Emailjs React API

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_EMAIL_KEY` | `string` | The API KEY we connect our mail with |

## Environment Variables

To run this project, you will need to add your own environment variables to your .env file


## Screenshots

![Screenshot example](Screens/Home.png)

