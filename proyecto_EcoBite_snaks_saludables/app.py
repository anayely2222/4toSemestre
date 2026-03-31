from flask import Flask, render_template

app = Flask(__name__)

# Ruta principal
@app.route('/')
def inicio():
    return render_template('index.html')


# Ruta dinámica de producto
@app.route('/producto/<nombre>')
def producto(nombre):
    return render_template('producto.html', nombre=nombre)


# Ruta dinámica de cliente
@app.route('/cliente/<nombre>')
def cliente(nombre):
    return render_template('cliente.html', nombre=nombre)


# Ruta adicional (acerca de)
@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)

    