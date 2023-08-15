/* All Products In Our Store */

const allProducts = [
  {
    id: 1,
    title: "apple speaker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 1300,
    image: "images/applespeaker.webp",
  },
  {
    id: 2,
    title: "apple watch ultra",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 7000,
    image: "images/applewatchultra.jpg",
  },
  {
    id: 3,
    title: "ipad air",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 1100,
    image: "images/ipadair.jpg",
  },
  {
    id: 4,
    title: "apple watch",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 987,
    image: "images/applewathc6.webp",
  },
  {
    id: 5,
    title: "ipad pro",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 1345,
    image: "images/ipadpro.webp",
  },
  {
    id: 6,
    title: "iphone 13",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 2302,
    image: "images/iphone13.jpg",
  },
  {
    id: 7,
    title: "mackbook",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 4000,
    image: "images/mackbook.jpg",
  },
  {
    id: 8,
    title: "magic keyboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 2000,
    image: "images/magickeyboard.webp",
  },
  {
    id: 9,
    title: "magic mouse",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 445,
    image: "images/magicmouse.webp",
  },
  {
    id: 10,
    title: "mx keys",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 456,
    image: "images/mxkeys.webp",
  },
  {
    id: 11,
    title: "mx keys mini",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est maiores nemo deleniti, doloremque dolore omnis temporibus expedita explicabo nostrum adipisci recusandae natus mollitia numquam neque? Distinctio inventore veniam ducimus?",
    price: 222,
    image: "images/mxkeysmini.webp",
  },
];

const $ = document;
const productsWrapper = $.querySelector('.products-wrapper');


allProducts.forEach(function(productObj){
  productsWrapper.insertAdjacentHTML('beforeend',`<div class="product-box">
  <h5 class="product-title">
   ${productObj.title}
  </h5>
  <div class="product-pic">
    <img src="${productObj.image}" alt="applespeaker">
  </div>
  <p class="product-description">
  ${productObj.desc}
  </p>
  <div class="product-box__footer">
    <p class="product-price">$ ${productObj.price}</p>
    <a class="product-more-btn" href="product.html?id=${productObj.id}">see more</a>
  </div>
</div>`)
});

