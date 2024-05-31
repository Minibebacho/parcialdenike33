document.addEventListener("DOMContentLoaded", function(){
    fetch(`js/productos.json`)
    .then(response => response.json()
    .then(data => {

        var producto1 = data.productos[0];
        var producto2 = data.productos[1];
        var producto3 = data.productos[2];
        var producto4 = data.productos[3];
        var producto5 = data.productos[4];
        var producto6 = data.productos[5];
        var producto7 = data.productos[6];
        var producto8 = data.productos[7];
        var producto9 = data.productos[8];
        var producto10 = data.productos[9];
        var producto11 = data.productos[10];
        var producto12 = data.productos[11];
        var producto13 = data.productos[12];
        var producto14 = data.productos[13];
        var producto15 = data.productos[14];
        var producto16 = data.productos[15];
        var producto17 = data.productos[16];
        var producto18 = data.productos[17];
        var producto19 = data.productos[18];
        var producto20 = data.productos[19];





        var tiendainfo= document.getElementById("tiendainfo");

        tiendainfo.innerHTML= `

        <div id="zapatillas" class="titulo-fluid mt-5 mb-5">
            <h1>Zapatillas Urbanas-Deportivas</h1></div>
    <div class="container">
    <div class="product">
    <img class="imagenes" src="${producto1.Imagen}">
    <p class="product-id">ID: ${producto1.ID}</p>
    <p class="product-name">Nombre: ${producto1.Nombre}</p>
    <p class="product-price">Precio: ${producto1.Precio}</p>
    <p class="product-stock">Stock: ${producto1.Stock}</p>
    <p class="product-category">Categoría: ${producto1.Categoría}</p>
    <p class="product-description">Descripción: ${producto1.Descripción}</p>
    <p class="product-brand">Marca: ${producto1.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto1.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto2.Imagen}">
    <p class="product-id">ID: ${producto2.ID}</p>
    <p class="product-name">Nombre: ${producto2.Nombre}</p>
    <p class="product-price">Precio: ${producto2.Precio}</p>
    <p class="product-stock">Stock: ${producto2.Stock}</p>
    <p class="product-category">Categoría: ${producto2.Categoría}</p>
    <p class="product-description">Descripción: ${producto2.Descripción}</p>
    <p class="product-brand">Marca: ${producto2.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto2.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto3.Imagen}">
    <p class="product-id">ID: ${producto3.ID}</p>
    <p class="product-name">Nombre: ${producto3.Nombre}</p>
    <p class="product-price">Precio: ${producto3.Precio}</p>
    <p class="product-stock">Stock: ${producto3.Stock}</p>
    <p class="product-category">Categoría: ${producto3.Categoría}</p>
    <p class="product-description">Descripción: ${producto3.Descripción}</p>
    <p class="product-brand">Marca: ${producto3.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto3.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto4.Imagen}">
    <p class="product-id">ID: ${producto4.ID}</p>
    <p class="product-name">Nombre: ${producto4.Nombre}</p>
    <p class="product-price">Precio: ${producto4.Precio}</p>
    <p class="product-stock">Stock: ${producto4.Stock}</p>
    <p class="product-category">Categoría: ${producto4.Categoría}</p>
    <p class="product-description">Descripción: ${producto4.Descripción}</p>
    <p class="product-brand">Marca: ${producto4.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto4.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto5.Imagen}">
    <p class="product-id">ID: ${producto5.ID}</p>
    <p class="product-name">Nombre: ${producto5.Nombre}</p>
    <p class="product-price">Precio: ${producto5.Precio}</p>
    <p class="product-stock">Stock: ${producto5.Stock}</p>
    <p class="product-category">Categoría: ${producto5.Categoría}</p>
    <p class="product-description">Descripción: ${producto5.Descripción}</p>
    <p class="product-brand">Marca: ${producto5.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto5.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto6.Imagen}">
    <p class="product-id">ID: ${producto6.ID}</p>
    <p class="product-name">Nombre: ${producto6.Nombre}</p>
    <p class="product-price">Precio: ${producto6.Precio}</p>
    <p class="product-stock">Stock: ${producto6.Stock}</p>
    <p class="product-category">Categoría: ${producto6.Categoría}</p>
    <p class="product-description">Descripción: ${producto6.Descripción}</p>
    <p class="product-brand">Marca: ${producto6.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto6.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto7.Imagen}">
    <p class="product-id">ID: ${producto7.ID}</p>
    <p class="product-name">Nombre: ${producto7.Nombre}</p>
    <p class="product-price">Precio: ${producto7.Precio}</p>
    <p class="product-stock">Stock: ${producto7.Stock}</p>
    <p class="product-category">Categoría: ${producto7.Categoría}</p>
    <p class="product-description">Descripción: ${producto7.Descripción}</p>
    <p class="product-brand">Marca: ${producto7.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto7.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto8.Imagen}">
    <p class="product-id">ID: ${producto8.ID}</p>
    <p class="product-name">Nombre: ${producto8.Nombre}</p>
    <p class="product-price">Precio: ${producto8.Precio}</p>
    <p class="product-stock">Stock: ${producto8.Stock}</p>
    <p class="product-category">Categoría: ${producto8.Categoría}</p>
    <p class="product-description">Descripción: ${producto8.Descripción}</p>
    <p class="product-brand">Marca: ${producto8.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto8.Disponibilidad}</p>
</div>

</div>
<div id="camisetas" class="titulo-fluid mt-5 mb-5">
<h1>Camisetas - Polos</h1></div>


<div class="container">
<div class="product">
    <img class="imagenes" src="${producto9.Imagen}">
    <p class="product-id">ID: ${producto9.ID}</p>
    <p class="product-name">Nombre: ${producto9.Nombre}</p>
    <p class="product-price">Precio: ${producto9.Precio}</p>
    <p class="product-stock">Stock: ${producto9.Stock}</p>
    <p class="product-category">Categoría: ${producto9.Categoría}</p>
    <p class="product-description">Descripción: ${producto9.Descripción}</p>
    <p class="product-brand">Marca: ${producto9.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto9.Disponibilidad}</p>
</div>

<div class="product">
    <img class="imagenes" src="${producto10.Imagen}">
    <p class="product-id">ID: ${producto10.ID}</p>
    <p class="product-name">Nombre: ${producto10.Nombre}</p>
    <p class="product-price">Precio: ${producto10.Precio}</p>
    <p class="product-stock">Stock: ${producto10.Stock}</p>
    <p class="product-category">Categoría: ${producto10.Categoría}</p>
    <p class="product-description">Descripción: ${producto10.Descripción}</p>
    <p class="product-brand">Marca: ${producto10.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto10.Disponibilidad}</p>
</div>


<div class="product">
    <img class="imagenes" src="${producto11.Imagen}">
    <p class="product-id">ID: ${producto11.ID}</p>
    <p class="product-name">Nombre: ${producto11.Nombre}</p>
    <p class="product-price">Precio: ${producto11.Precio}</p>
    <p class="product-stock">Stock: ${producto11.Stock}</p>
    <p class="product-category">Categoría: ${producto11.Categoría}</p>
    <p class="product-description">Descripción: ${producto11.Descripción}</p>
    <p class="product-brand">Marca: ${producto11.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto11.Disponibilidad}</p>
</div>


<div class="product">
    <img class="imagenes" src="${producto12.Imagen}">
    <p class="product-id">ID: ${producto12.ID}</p>
    <p class="product-name">Nombre: ${producto12.Nombre}</p>
    <p class="product-price">Precio: ${producto12.Precio}</p>
    <p class="product-stock">Stock: ${producto12.Stock}</p>
    <p class="product-category">Categoría: ${producto12.Categoría}</p>
    <p class="product-description">Descripción: ${producto12.Descripción}</p>
    <p class="product-brand">Marca: ${producto12.Marca}</p>
    <p class="product-availability">Disponibilidad: ${producto12.Disponibilidad}</p>
    </div>

    
    <div class="product">
    <img class="imagenes" src="${producto13.Imagen}">
    <p>ID : ${producto13.ID}</p>
    <p>Nombre : ${producto13.Nombre}</p>
    <p>Precio : ${producto13.Precio}</p>
    <p>Stock : ${producto13.Stock}</p>
    <p>Categoria : ${producto13.Categoría}</p>
    <p>Descripcion: ${producto13.Descripción}</p>
    <p>Marca : ${producto13.Marca}</p>
    <p>Disponibilidad : ${producto13.Disponibilidad}</p>
    </div>

    <div class="product">
    <img class="imagenes" src="${producto14.Imagen}">
    <p>ID : ${producto14.ID}</p>
    <p>Nombre : ${producto14.Nombre}</p>
    <p>Precio : ${producto14.Precio}</p>
    <p>Stock : ${producto14.Stock}</p>
    <p>Categoria : ${producto14.Categoría}</p>
    <p>Descripcion: ${producto14.Descripción}</p>
    <p>Marca : ${producto14.Marca}</p>
    <p>Disponibilidad : ${producto14.Disponibilidad}</p>
    </div>
   
    <div class="product">
    <img class="imagenes" src="${producto15.Imagen}">
    <p>ID : ${producto15.ID}</p>
    <p>Nombre : ${producto15.Nombre}</p>
    <p>Precio : ${producto15.Precio}</p>
    <p>Stock : ${producto15.Stock}</p>
    <p>Categoria : ${producto15.Categoría}</p>
    <p>Descripcion: ${producto15.Descripción}</p>
    <p>Marca : ${producto15.Marca}</p>
    <p>Disponibilidad : ${producto15.Disponibilidad}</p>
    </div>

    <div class="product">
    <img class="imagenes" src="${producto16.Imagen}">
    <p>ID : ${producto16.ID}</p>
    <p>Nombre : ${producto16.Nombre}</p>
    <p>Precio : ${producto16.Precio}</p>
    <p>Stock : ${producto16.Stock}</p>
    <p>Categoria : ${producto16.Categoría}</p>
    <p>Descripcion: ${producto16.Descripción}</p>
    <p>Marca : ${producto16.Marca}</p>
    <p>Disponibilidad : ${producto16.Disponibilidad}</p>
    </div>
    </div>

    <div id="pantalones" class="titulo-fluid mt-5 mb-5">
    <h1>Pantalones - Buzos</h1></div>
    
    <div id="1" class="container">
    <div class="product">
    <img class="imagenes" src="${producto17.Imagen}">
    <p>ID : ${producto17.ID}</p>
    <p>Nombre : ${producto17.Nombre}</p>
    <p>Precio : ${producto17.Precio}</p>
    <p>Stock : ${producto17.Stock}</p>
    <p>Categoria : ${producto17.Categoría}</p>
    <p>Descripcion: ${producto17.Descripción}</p>
    <p>Marca : ${producto17.Marca}</p>
    <p>Disponibilidad : ${producto17.Disponibilidad}</p>
    </div>

    <div class="product">
    <img class="imagenes" src="${producto18.Imagen}">
    <p>ID : ${producto18.ID}</p>
    <p>Nombre : ${producto18.Nombre}</p>
    <p>Precio : ${producto18.Precio}</p>
    <p>Stock : ${producto18.Stock}</p>
    <p>Categoria : ${producto18.Categoría}</p>
    <p>Descripcion: ${producto18.Descripción}</p>
    <p>Marca : ${producto18.Marca}</p>
    <p>Disponibilidad : ${producto18.Disponibilidad}</p>
    </div>

    <div class="product">
    <img class="imagenes" src="${producto19.Imagen}">
    <p>ID : ${producto19.ID}</p>
    <p>Nombre : ${producto19.Nombre}</p>
    <p>Precio : ${producto19.Precio}</p>
    <p>Stock : ${producto19.Stock}</p>
    <p>Categoria : ${producto19.Categoría}</p>
    <p>Descripcion: ${producto19.Descripción}</p>
    <p>Marca : ${producto19.Marca}</p>
    <p>Disponibilidad : ${producto19.Disponibilidad}</p>
    </div>
   
    <div class="product">
    <img class="imagenes" src="${producto20.Imagen}">
    <p>ID : ${producto20.ID}</p>
    <p>Nombre : ${producto20.Nombre}</p>
    <p>Precio : ${producto20.Precio}</p>
    <p>Stock : ${producto20.Stock}</p>
    <p>Categoria : ${producto20.Categoría}</p>
    <p>Descripcion: ${producto20.Descripción}</p>
    <p>Marca : ${producto20.Marca}</p>
    <p>Disponibilidad : ${producto20.Disponibilidad}</p>
    </div>

    
    </div>


        `
    })
)
})