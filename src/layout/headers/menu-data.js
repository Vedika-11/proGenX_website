const menu_data = [
  {
    id:1,
    mega_menu:false,
//    has_dropdown:true,
    has_dropdown:false,
    title:'Home',
    link:'/',
//    sub_menus:[
//      {link:'/',title:'Creative Agency'},
//      {link:'/home-2',title:'Personal Portfolio'},
//      {link:'/home-3',title:'Startup Business'},
//      {link:'/home-4',title:'Digital Agency'},
//      {link:'/home-5',title:'Business Advisor'},
//      {link:'/home-6',title:'IT Service Agency'},
//    ]
  },

  {
    id:2,
    mega_menu:false,
    has_dropdown:false,
    title:'About',
    link:'/about',
  },
  {
    id:3,
//    mega_menu:false
    mega_menu:true,
    has_dropdown:true,
//    title:'Portfolio',
title:"Services",
    link:'/portfolio',
//    sub_menus:[
//      {link:'/portfolio',title:'Portfolio Full Width'},
//      {link:'/portfolio-2',title:'Portfolio Filter 01'},
//      {link:'/portfolio-3',title:'Portfolio Filter 02'},
//      {link:'/portfolio-masonry',title:'Portfolio Masonry'},
//      {link:'/portfolio-details',title:'Portfolio Details'},
//    ]
sub_menus:[
      {link:'/about',title:'Development'},
      {link:'/about-me',title:'Graphic Design'},
      {link:'/job',title:'Digital marketing'},
      {link:'/job-details',title:'Web Development '},
      {link:'/product',title:'Logo Design'},
      {link:'/product-details',title:'Search Engine Optimization'},
      {link:'/service-1',title:'Mobile App Development '},
      {link:'/service-2',title:'Branding/Identity Design'},
      {link:'/service-3',title:'Social Media Marketing'},
      {link:'/service-4',title:'Cloud Services'},
      {link:'/service-details',title:'UI/UX Design'},
      {link:'/testimonial',title:'Content Writing'},
      {link:'/price',title:'ServerLess Services'},
      {link:'/faq',title:'Image Editing/Retouching'},
      {link:'/login',title:'Online Reputation Management'},
      {link:'/register',title:'CRM'},
      {link:'/checkout',title:'Motion Graphics'},
      {link:'/404',title:'eCommerce Marketing'},
    ]
  },
  {
    id:4,
    mega_menu:false,
    has_dropdown:true,
//    mega_menu:true,
//    has_dropdown:true,
    title:'Portfolio',
    link:'#',
//    sub_menus:[
//      {link:'/about',title:'About'},
//      {link:'/about-me',title:'About Me'},
//      {link:'/job',title:'Job'},
//      {link:'/job-details',title:'Job Details'},
//      {link:'/product',title:'Product'},
//      {link:'/product-details',title:'Product Details'},
//      {link:'/service-1',title:'Service 01'},
//      {link:'/service-2',title:'Service 02'},
//      {link:'/service-3',title:'Service 03'},
//      {link:'/service-4',title:'Service 04'},
//      {link:'/service-details',title:'Service Details'},
//      {link:'/testimonial',title:'Testimonial'},
//      {link:'/price',title:'Price'},
//      {link:'/faq',title:'Faq'},
//      {link:'/login',title:'Login'},
//      {link:'/register',title:'Register'},
//      {link:'/cart',title:'Cart'},
//      {link:'/wishlist',title:'Wishlist'},
//      {link:'/checkout',title:'Checkout'},
//      {link:'/404',title:'404'},
//    ]
sub_menus:[
      {link:'/',title:'Projects'},
      {link:'/',title:'Case Study'},
    ]
  },
  {
    id:5,
    mega_menu:false,
//    has_dropdown:true,
     has_dropdown:false,
    title:'Blog',
    link:'/blog',
//    sub_menus:[
//      {link:'/blog',title:'Blog Sidebar'},
//      {link:'/blog-details',title:'Blog Details'},
//    ]
  },
  {
    id:6,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact',
    link:'/contact',
  }
]
export default menu_data;

