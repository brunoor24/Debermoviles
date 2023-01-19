export function Profile(){
  return (
    <img
    src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
    alt= "Khaterine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}