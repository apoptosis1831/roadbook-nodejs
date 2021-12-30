const http=require('http');
const fs=require('fs').promises;

http.createServer(async (req,res)=>{
    try{
        const f = await fs.readFile('/Users/kwonjh/VSCODE/roadbook-nodejs/chapter03/sample/fs_test.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        //200이면 요청 성공
        res.end(f); //요청 종료
    } catch(err){
        console.error(err);
        res.writeHead(500,{'Content-Type':'text/html; charset=utf-8'});
        //500이면 서버에 오류 발생
        res.end(err.messeage); // 오류메시지와 함께 요청 종료
    }
})
.listen(8080, ()=>{
    console.log('8080포트에서 서버 연결중..')
});