import React from 'react';
import './Productos.css';

function Productos() {
  return (
    <section className='carousel-track' >
      <h2 className='cuotas'>
  <span className="numero-destacado">6</span> 
  <span className="texto-cuotas"> Cuotas Sin Interés</span><br/>
  <span className="texto-compras">En Todas Tus Compras</span>
</h2>


      <img className='carousel-item' src="https://www.devre.la/media/wysiwyg/__Punta_trajes.jpg" alt="Producto 1" />
      <img className='carousel-item' src="https://www.devre.la/media/wysiwyg/__Punta_sacos.jpg" alt="Producto 2" />
      <img className='carousel-item' src="https://www.devre.la/media/wysiwyg/remeras_desde_25.990_3.jpg" alt="Producto 3" />
      <img className='carousel-item' src="https://www.devre.la/media/wysiwyg/__Punta_camisas.jpg" alt="Producto 4" />
      <img className='carousel-item' src="https://www.devre.la/media/wysiwyg/shorts_de_ba_o_desde_29.990_3.jpg" alt="Producto 5" />
    </section>
  );
}

export default Productos;
