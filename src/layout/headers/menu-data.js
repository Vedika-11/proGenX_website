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
    link:'/home-2',
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
      {link:'/',title:'Development'},
      {link:'/',title:'Graphic Design'},
      {link:'/',title:'Digital marketing'},
      {link:'/home-3',title:'Web Development '},
      {link:'/home-4',title:'Logo Design'},
      {link:'/home-6',title:'Search Engine Optimization'},
      {link:'/home-3',title:'Mobile App Development '},
      {link:'/home-4',title:'Branding/Identity Design'},
      {link:'/home-6',title:'Social Media Marketing'},
      {link:'/home-3',title:'Cloud Services'},
      {link:'/home-4',title:'UI/UX Design'},
      {link:'/home-6',title:'Content Writing'},
      {link:'/home-3',title:'ServerLess Services'},
      {link:'/home-4',title:'Image Editing/Retouching'},
      {link:'/home-6',title:'Online Reputation Management'},
      {link:'/home-3',title:'CRM'},
      {link:'/home-4',title:'Motion Graphics'},
      {link:'/home-6',title:'eCommerce Marketing'},
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
      {link:'/home-5',title:'Projects'},
      {link:'/portfolio',title:'Case Study'},
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

