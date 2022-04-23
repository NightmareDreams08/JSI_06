import React from "react";
import "./index.css";

const ProductList = () => {
  return ( <section class="newProducts">
  <h1>News Products</h1>
  <div class="newProducts__container">
      <div class="newProducts__item">
          <div class="item__image">
              <img src="./img/p6.jpg" alt="p6">
              <div class="item__image-child">
                  <img src="./img/p5.jpg" alt="p5">
              </div>
          </div>
          <div class="item__content">
              <h3>My product is the best</h3>
              <p><strong>XL/XXL/S</strong></p>
              <div class="item__text">
                  <p><del>$100.000</del></p>
                  <p><strong>$70.000</strong></p>
              </div>
              <button>Add To Cart</button>
          </div>
      </div>
      <div class="newProducts__item">
          <div class="item__image">
              <img src="./img/p7.jpg" alt="p5">
              <div class="item__image-child">
                  <img src="./img/p8.jpg" alt="p6">
              </div>
          </div>
          <div class="item__content">
              <h3>My product is the best</h3>
              <p><strong>XL/XXL/S</strong></p>
              <div class="item__text">
                  <p><del>$100.000</del></p>
                  <p><strong>$70.000</strong></p>
              </div>
              <button>Add To Cart</button>
          </div>
      </div>
      <div class="newProducts__item">
          <div class="item__image">
              <img src="./img/p9.jpg" alt="p5">
              <div class="item__image-child">
                  <img src="./img/p10.jpg" alt="p6">
              </div>
          </div>
          <div class="item__content">
              <h3>My product is the best</h3>
              <p><strong>XL/XXL/S</strong></p>
              <div class="item__text">
                  <p><del>$100.000</del></p>
                  <p><strong>$70.000</strong></p>
              </div>
              <button>Add To Cart</button>
          </div>
      </div>
      <div class="newProducts__item">
          <div class="item__image">
              <img src="./img/p11.jpg" alt="p5">
              <div class="item__image-child">
                  <img src="./img/p12.jpg" alt="p6">
              </div>
          </div>
          <div class="item__content">
              <h3>My product is the best</h3>
              <p><strong>XL/XXL/S</strong></p>
              <div class="item__text">
                  <p><del>$100.000</del></p>
                  <p><strong>$70.000</strong></p>
              </div>
              <button>Add To Cart</button>
          </div>
      </div>

  </div>
</section>)
}

export default ProductList;
