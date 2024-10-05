/**
 * 
 */

const http = require('http');

const dadosReq = (req,res) => {
	
	res.writeHead(200, {"Content-Type":"text/html"});
		res.write('<form>');
		res.write('<label for="prnome">Primeiro nome:</label><br>');
		res.write('<input type="text" id="prnome">');
		res.write('<input type="submit" value="Submit">');
		res.write('</form>');
	res.end();
}

const servidor = http.createServer(dadosReq);

servidor.listen(3000);
