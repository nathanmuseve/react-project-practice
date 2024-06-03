
import Button from "./Button"
import './Home.css'
function Home() {
  return(
    <div id="home">
      <div className ="container">
      <h1>Did you mean Home?</h1>
      <p>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla similique sequi nam. Voluptas, ullam. Nesciunt illo architecto soluta! Odio error fugiat nesciunt est praesentium dolorem nulla cupiditate nobis voluptates.</p>

      <p>  Reprehenderit rerum, omnis, optio dolorum magni nulla exercitationem asperiores excepturi maiores magnam natus pariatur? Totam, mollitia, atque laudantium praesentium illum quos, corrupti et doloremque autem sunt esse impedit maxime distinctio!</p>

      <p>  Tempore accusantium, dolores porro delectus corporis vel omnis cumque cupiditate eum veniam eos ipsa consequuntur sit illo neque quisquam vitae amet iure quibusdam. Iusto quod labore laboriosam sed cupiditate nobis.</p>
      </div>

      <picture>
      <img src= {require("./images/imageNature.jpg")} alt="My Name"/>
      <img src={require("./images/imageNature1.jpg")} alt="Dont worry, it will render"/>
      <img src= {require("./images/imageNature.jpg")} alt="My Name"/>
      <img src={require("./images/imageNature1.jpg")} alt="Dont worry, it will render"/>
      <img src= {require("./images/imageNature.jpg")} alt="My Name"/>
      <img src={require("./images/imageNature1.jpg")} alt="Dont worry, it will render"/>
      </picture>
      <Button imgs = 'Click' text = 'click'/>
    </div>
  );
}
export default Home;