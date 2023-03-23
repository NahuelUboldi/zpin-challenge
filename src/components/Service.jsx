function Service(info, index) {
  const { title, desc, img } = info.item;
  return (
    <article id='service' className='py-5'>
      <div className='image'>
        <img src={img} alt={title} width='100%' />
      </div>
      <div className='text'>
        <h3 className='h1'>{title}</h3>
        <p className='lead'>{desc}</p>
      </div>
    </article>
  );
}

export default Service;
