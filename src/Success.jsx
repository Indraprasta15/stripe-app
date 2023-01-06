import "./Success.css";


const Success = () => {
  return (
      <div className="wrapper">
        <img className="image"
          src="https://images.pexels.com/photos/1339366/pexels-photo-1339366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt=""/>
        <div className="info">
          Successfull
        </div>
        <div className="desc">
          <p>Your order is being prepared. Thanks for choosing Inda Shop</p>
        </div>
      </div>
  )
};

export default Success;