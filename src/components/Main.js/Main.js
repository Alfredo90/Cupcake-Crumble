
const Main = () => {
  const images = [
    {id:0, imageUrl: "https://images.unsplash.com/photo-1586985290301-8db40143d525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",},
    {id:1, imageUrl:'https://images.unsplash.com/photo-1582760999860-bc6c933093da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:" About"},
    {id:2, imageUrl:'https://images.unsplash.com/photo-1551893132-13b98b83cb44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: "Service"},
]
  return (
    <div className=" border" >
      {images.map(({id, imageUrl, title}) => (
      <img key={id} src={imageUrl} alt={imageUrl}></img>
      ))}
      <button >Shop Now</button>
      
    </div>
  );
};
export default Main;
