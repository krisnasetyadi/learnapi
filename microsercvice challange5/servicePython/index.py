from http import server
from http.server import HTTPServer,BaseHTTPRequestHandler

class helloHandler(BaseHTTPRequestHandler):
    def do_get(self):
        self.send_response(200)
        self.send_header('content-type','text/html')
        self.end_headers()
        self.wfile.write('Halo from Python:'.encode())

def main ():
    PORT = 3003
    server = HTTPServer(('',PORT), helloHandler)
    print('server is running on port %s ' %PORT)
    server.serve_forever()

if __name__ == '__main__':
    main()
    print("This is Python Page")