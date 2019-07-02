import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
} from '@nestjs/websockets';
import {Client} from 'socket.io';

// ws://localhost:3001/websockets
@WebSocketGateway(3001,{
    namespace:'/websockets'
})
export class ChatGateway {
    @WebSocketServer() server;
    constructor(){
        console.log(this.server);
    }

    @SubscribeMessage('holaMundo')
    holaMundo(client: Client, data: any){
        return 'Hola mundo';
    }
}