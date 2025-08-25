import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 서버 IP 주소를 변수로 만들어 사용하면 편리합니다.
const SERVER_IP = '3.36.109.149'; 
//
 export default defineConfig({
//   // 1. base 설정은 반드시 필요합니다.
     base: '/likelion_univ/',
       
         plugins: [react()],
           
             server: {
                 port: 3001,
                     // 2. 이 origin 설정이 리디렉션 루프를 막는 핵심입니다.
                         //    Vite에게 자신의 진짜 외부 주소를 알려줍니다.
                             origin: `http://${SERVER_IP}`
                               }
                               })

