from flask import Flask

app = Flask(__name__)

# Ruta principal
@app.route('/')
def inicio():
    return "Bienvenido a Ecobite – Snacks saludables y naturales 🌱"

# Ruta dinámica (ejemplo adaptado al negocio)
@app.route('/producto/<nombre>')
def producto(nombre):
    return f"Producto: {nombre} – disponible en Ecobite 🥗"

# Otra opción (cliente)
@app.route('/cliente/<nombre>')
def cliente(nombre):
    return f"Bienvenido, {nombre}. Gracias por preferir Ecobite 💚"

if __name__ == '__main__':
    app.run(debug=True)