(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),o=a.n(r),i=a(6),l=a(7),m=(a(33),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"logo",src:"/images/reactMovie_logo.png",alt:"logo"}))))}),s=a(16),u=a(21),h=a(9),v=a(10),g=a(12),d=a(11),p=a(13),f="https://api.themoviedb.org/3/",E="9872397edd34306defde5a30cd11a081",b="http://image.tmdb.org/t/p/",N=(a(38),function(e){return c.a.createElement("div",{className:"heroImage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n                 39%, rgba(0,0,0,0)\n                 41%, rgba(0,0,0,0.65)\n                 100%),\n                 url('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"heroImage-content"},c.a.createElement("div",{className:"heroImage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),I=(a(39),function(e){return c.a.createElement("div",{className:"grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"grid-content"},e.children.map(function(e,t){return c.a.createElement("div",{key:t,className:"grid-element"},e)})))}),k=a(15),y=a.n(k),S=(a(41),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.callback(a.state.value)},500)},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"searchbar"},c.a.createElement("div",{className:"searchbar-content"},c.a.createElement(y.a,{className:"fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"searchbar-input",placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),O=(a(42),function(e){return c.a.createElement("div",{className:"movieThumb clickable"},e.clickable?c.a.createElement(i.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"movieThumb"})):c.a.createElement("img",{src:e.image,alt:"movieThumb"}))}),j=(a(43),function(e){return c.a.createElement("div",{className:"loadMoreBtn",onClick:e.onclick},c.a.createElement("p",null,e.text))}),_=(a(44),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(45),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(f,"movie/popular?api_key=").concat(E,"&language=ru-RU&page=1"):"".concat(f,"search/movie?api_key=").concat(E,"&language=ru-RU&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(f,"movie/popular?api_key=").concat(E,"&language=ru-RU&page=").concat(a.state.currentPage+1):"".concat(f,"search/movie?api_key=").concat(E,"&language=ru-RU&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(u.a)(a.state.movies),Object(u.a)(e.results)),heroImage:a.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},function(){""===a.state.searchTerm&&localStorage.setItem("HomeState",JSON.stringify(a.state))})})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(f,"movie/popular?api_key=").concat(E,"&language=ru-RU&page=1");this.fetchItems(t)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(N,{image:"".concat(b).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(S,{callback:this.searchItems})):null,c.a.createElement("div",{className:"home-grid"},c.a.createElement(I,{header:this.state.searchTerm?"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0448\u0443\u043a\u0443":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u0444\u0456\u043b\u044c\u043c\u0438",loading:this.state.loading},this.state.movies.map(function(e,t){return c.a.createElement(O,{key:t,clickable:!0,image:e.poster_path?"".concat(b).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),this.state.loading?c.a.createElement(_,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(j,{text:"Load More",onclick:this.loadMoreItems}):null))}}]),t}(c.a.Component)),x=function(){return c.a.createElement("h1",null,"Oops..! Something went wrong. This page doesn't exist.")},T=(a(46),function(e){return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),M=(a(47),function(e){var t=e.movie,a=e.directors;return c.a.createElement("div",{className:"movieInfo",style:{background:t.backdrop_path?"url('".concat(b).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"movieInfo-content"},c.a.createElement("div",{className:"movieInfo-thumb"},c.a.createElement(O,{image:t.poster_path?"".concat(b).concat("w500").concat(t.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"movieInfo-text"},c.a.createElement("h1",null,t.title),c.a.createElement("h3",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.a.createElement("p",null,t.overview),c.a.createElement("h3",null,"IMDB \u0440\u0435\u0439\u0442\u0438\u043d\u0433"),c.a.createElement("div",{className:"rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*t.vote_average}),c.a.createElement("p",{className:"score"},t.vote_average)),a.length>1?c.a.createElement("h3",null,"\u0420\u0415\u0416\u0418\u0421\u0421\u0415\u0420\u042b"):c.a.createElement("h3",null,"\u0420\u0415\u0416\u0418\u0421\u0421\u0415\u0420"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"director"},e.name)})),c.a.createElement(y.a,{className:"fa-film",name:"film",size:"5x"})))}),U=a(27),P=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},R=(a(51),function(e){return c.a.createElement("div",{className:"movieinfobar"},c.a.createElement("div",{className:"movieinfobar-content"},c.a.createElement("div",{className:"movieinfobar-content-col"},c.a.createElement(U.a,{icon:"clock"}),c.a.createElement("span",{className:"movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"movieinfobar-content-col"},c.a.createElement("span",{className:"movieinfobar-info"},"Budget: ",P(e.budget))),c.a.createElement("div",{className:"movieinfobar-content-col"},c.a.createElement("span",{className:"movieinfobar-info"},"Revenue: ",P(e.revenue)))))}),D=(a(52),function(e){return c.a.createElement("div",{className:"actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(b).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"actor-name"},e.actor.name),c.a.createElement("span",{className:"actor-character"},e.actor.character))}),J=(a(53),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(f,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(E);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:t,loading:!1},function(){localStorage.setItem("".concat(a.props.match.params.movieId),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("".concat(this.props.match.params.movieId))){var e=JSON.parse(localStorage.getItem("".concat(this.props.match.params.movieId)));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(f,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(E,"&language=ru-RU");this.fetchItems(t)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(T,{movie:this.props.location.movieName}),c.a.createElement(M,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(R,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"movie-grid"},c.a.createElement(I,{header:"Actors"},this.state.actors.map(function(e,t){return c.a.createElement(D,{key:t,actor:e})}))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"NO MOVIE FOUND "),this.state.loading?c.a.createElement(_,null):null)}}]),t}(n.Component)),C=function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:w,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:J,exact:!0}),c.a.createElement(l.a,{component:x}))))};a(54);o.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.931a6bb8.chunk.js.map