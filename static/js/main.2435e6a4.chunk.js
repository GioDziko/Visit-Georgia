(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,a,s){},33:function(e,a,s){},34:function(e,a,s){},43:function(e,a,s){},44:function(e,a,s){},45:function(e,a,s){},46:function(e,a,s){},47:function(e,a,s){},48:function(e,a,s){},49:function(e,a,s){},50:function(e,a,s){},51:function(e,a,s){},52:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);var i=s(1),t=s(3),c=s.n(t),n=s(18),r=s.n(n),o=(s(32),s(33),s(19)),l=s(20),d=s(26),j=s(25),h=(s(34),s(10)),m=function(e){Object(d.a)(s,e);var a=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return(e=a.call.apply(a,[this].concat(t))).HamburgerClick=function(){document.querySelector(".hamburger");var e=document.querySelector(".nav-links"),a=document.querySelectorAll(".nav-links li");e.classList.toggle("open"),a.forEach((function(e){e.classList.toggle("fade")}))},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(i.jsx)(t.Fragment,{children:Object(i.jsxs)("nav",{children:[Object(i.jsxs)("div",{className:"hamburger",onClick:this.HamburgerClick,children:[Object(i.jsx)("div",{class:"line"}),Object(i.jsx)("div",{class:"line"}),Object(i.jsx)("div",{class:"line"})]}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)("li",{children:Object(i.jsx)(h.HashLink,{to:"/#firstSection",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.HashLink,{to:"/home#secondSection",children:"Destinations"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.HashLink,{to:"/home#contact",children:"Contact"})})]})]})})}}]),s}(t.Component),b=(s(43),s.p+"static/media/Batumi.7fd3824d.mp4"),x=s(5);var u=function(){var e=Object(t.useRef)(null),a=Object(t.useRef)(null),s=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,1,{height:"0%"},{height:"100%",ease:"Power3.easeInOut"}),x.a.fromTo(e,3,{width:"80%"},{width:"100%",ease:"Power3.easeInOut"}),x.a.fromTo(a,3,{fontSize:"0px",opacity:0},{opacity:1,fontSize:"50px",ease:"Power3.easeInOut"}),x.a.fromTo(s,3,{fontSize:"0px",opacity:0},{opacity:1,fontSize:"50px",ease:"Power3.easeInOut"})})),Object(i.jsxs)("section",{className:"home_body",id:"firstSection",children:[Object(i.jsx)("div",{className:"hero",ref:function(a){e=a},children:Object(i.jsx)("video",{src:b,autoPlay:!0,loop:!0,muted:!0})}),Object(i.jsxs)("div",{className:"text_holder",children:[Object(i.jsx)("h1",{className:"headline_1",ref:function(e){s=e},children:"ADVENTURES AWAITS"}),Object(i.jsxs)("h1",{className:"headline",ref:function(e){a=e},children:["Spend summer in ",Object(i.jsx)("span",{className:"georgia",children:"Georgia"})]})]})]})},g=(s(44),s.p+"static/media/538101.2d355b84.jpg"),O=s.p+"static/media/signagi_1.fc1b9a9a.jpg",p=s.p+"static/media/svaneti.8ea56dfb.jpg",f=s.p+"static/media/racha.d70a103b.jpg",v=s.p+"static/media/samegrelo.664539cc.jpg",k=s.p+"static/media/guria.464dcc97.jpg";var N=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,1,{x:"-100%",opacity:"0"},{x:"0%",opacity:"1",ease:"Power3.easeInOut"})})),Object(i.jsx)("section",{className:"secondSection",id:"secondSection",ref:function(a){e=a},children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"achara info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/achara#achara",children:Object(i.jsx)("img",{className:"img",src:g})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Follow Colors in Ajara, ",Object(i.jsx)("span",{children:"Georgia"})]})})]}),Object(i.jsxs)("div",{className:"signagi info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/kakheti#kakheti",children:Object(i.jsx)("img",{className:"img",src:O})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Taste the best wine in Kakheti, ",Object(i.jsx)("span",{children:"Georgia"})]})})]}),Object(i.jsxs)("div",{className:"svaneti info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/svaneti#svaneti",children:Object(i.jsx)("img",{className:"img",src:p})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Let freedom ring in Svaneti, ",Object(i.jsx)("span",{children:"Georgia"})]})})]}),Object(i.jsxs)("div",{className:"racha info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/racha#racha",children:Object(i.jsx)("img",{className:"img",src:f})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Feel free in Racha, ",Object(i.jsx)("span",{children:"Georgia"})]})})]}),Object(i.jsxs)("div",{className:"guria info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/guria#guria",children:Object(i.jsx)("img",{className:"img",src:k})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Guria - happiness over the Clouds ",Object(i.jsx)("span",{children:"Georgia"})]})})]}),Object(i.jsxs)("div",{className:"samegrelo info_container ",children:[Object(i.jsx)(h.HashLink,{className:"link",to:"/samegrelo#samegrelo",children:Object(i.jsx)("img",{className:"img",src:v})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:["Explore wild nature in Samegrelo, ",Object(i.jsx)("span",{children:"Georgia"})]})})]})]})})},_=(s(45),s(46),s(22)),w=s(23),y=s(24);var H=function(){return Object(i.jsxs)("section",{className:"Contact",id:"contact",children:[Object(i.jsx)("h1",{children:"Contact information"}),Object(i.jsxs)("ul",{id:"contact-ul",children:[Object(i.jsx)("li",{children:Object(i.jsxs)("a",{href:"https://www.facebook.com/gio.dziko/",target:"_blank",children:[Object(i.jsx)(_.a,{className:"icons"}),"Facebook"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("a",{href:"https://www.instagram.com/gio_dzirkvelishvili/",target:"_blank",children:[Object(i.jsx)(w.a,{className:"icons"}),"Instagram"]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("a",{href:"https://github.com/GioDziko",target:"_blank",children:[Object(i.jsx)(y.a,{className:"icons"}),"Github"]})})]}),Object(i.jsx)("hr",{class:"hr"}),Object(i.jsx)("footer",{class:"footer",children:Object(i.jsx)("p",{children:"\xa9 Created and Designed by Dziko"})})]})};var G=function(){return Object(i.jsxs)("div",{classname:"home",children:[Object(i.jsx)(m,{}),Object(i.jsx)(u,{}),Object(i.jsx)(N,{}),Object(i.jsx)(H,{})]})},R=s(11),S=s(4),E=(s(47),s.p+"static/media/batumi.db90c071.jpg"),T=s.p+"static/media/batumi_video.f1822e03.mp4",B=s.p+"static/media/food.3f5ae489.jpeg",C=s.p+"static/media/dolphinarium.6734395c.jpg",P=s.p+"static/media/protectedAreas.ffdc9a57.jpg";var I=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"achara",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",ref:function(a){e=a},children:Object(i.jsx)("video",{src:T,autoPlay:!0,loop:!0,muted:!0})}),Object(i.jsxs)("div",{className:"achara_container",children:[Object(i.jsxs)("div",{className:"achara_container_1",children:[Object(i.jsx)("img",{id:"batumi_img",src:E}),Object(i.jsx)("div",{className:"achara_text",children:Object(i.jsx)("p",{children:"Batumi Boulevard is one of the main attractions for the town\u2019s visitors. The wide boulevard follows the seaside and is full of beach bars, caf\xe9-lounges, restaurants, amusement rides for children and various colorful and dancing fountains. In addition to unique vegetation, you will find in Batumi Boulevard many interesting sculptures and architectural monuments. Batumi Boulevard has a history of over a century. Its construction began in 1881. Its creation was the idea of Batumi district governor Mekalov, who commissioned the coastal boulevard to be built to a famous Prussian gardener named Reseller. Later, the planned development of the boulevard was handed over to a French gardener and designer invited to Georgia, Mikheil d\u2019Alphonse, who is referred to in historical records as the \u201cKind Genie of Batumi Seaside\u201d. The development of the boulevard also owes much to Gordeziani, who studied in France and was appointed the manager of the City Park Boulevard in 1917. The first colorful dancing fountains of the Boulevard have been functioning since 1977. In 2009, the length of the Boulevard was significantly increased and now reaches 7 kilometers. The so-called New Boulevard was designed by a Spanish architect and built in accordance with the latest standards."})})]}),Object(i.jsxs)("div",{className:"achara_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"achara_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Adjara"}),Object(i.jsx)("hr",{className:"achara_hr"})]}),Object(i.jsxs)("div",{className:"achara_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiastartshere.com/georgian-food-cuisine/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:B})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"Georgian"})," Cuisine "]})})]}),Object(i.jsxs)("div",{className:"achara_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://apa.gov.ge/ge/protected-areas/reserve",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:P})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Protected"})," Areas"]})})]}),Object(i.jsxs)("div",{className:"achara_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"http://dolphinarium.ge/ka/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:C})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Dolphinarium"})," Batumi"]})})]})]})]}),Object(i.jsx)(H,{})]})},A=(s(48),s.p+"static/media/signagi.f96e71ef.jpg"),L=s.p+"static/media/kakheti_video.81a57687.mp4",z=s.p+"static/media/wine.c6715d7b.jpg",D=s.p+"static/media/gelati.5658f228.jpg",F=s.p+"static/media/mwvadi.f0bd14ac.jpg";var K=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"kakheti",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",children:Object(i.jsx)("video",{src:L,autoPlay:!0,loop:!0,muted:!0,ref:function(a){return e=a}})}),Object(i.jsxs)("div",{className:"kakheti_container",children:[Object(i.jsxs)("div",{className:"kakheti_container_1",children:[Object(i.jsx)("img",{id:"kakheti_img",src:A}),Object(i.jsx)("div",{className:"kakheti_text",children:Object(i.jsx)("p",{children:"Kakheti is the largest region of Georgia. It is one of the diverse regions, but it is also known to everyone, that Kakheti is the land of Grapes. The fifth part of vineyards in the nation belong to Kakheti, while grapes grown here amount to the half of the grape harvest in the country. But, of course, this is not everything. As soon as you get close to Kakheti, on the way the smell of hot, freshly baked traditional Shoti (local special bread, kind of long pointed loaf) will hit you. You will have an itch of eating it immediately, with local amazing cheese and butter. Oh, and most delicious, Churchxela (known as Georgian Snikersi). Once you tasta KaKhetian cousin, you will hardly ever wish anything better."})})]}),Object(i.jsxs)("div",{className:"kakheti_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"kakheti_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Kakheti"}),Object(i.jsx)("hr",{className:"kakheti_hr"})]}),Object(i.jsxs)("div",{className:"kakheti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://en.wikipedia.org/wiki/Georgian_wine",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:z})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"Georgian"})," Wine "]})})]}),Object(i.jsxs)("div",{className:"kakheti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://en.wikipedia.org/wiki/Gelati_Monastery",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:D})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Historical"})," Monuments"]})})]}),Object(i.jsxs)("div",{className:"kakheti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiastartshere.com/georgian-food-cuisine/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:F})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Georgian"})," Cuisine"]})})]})]})]}),Object(i.jsx)(H,{})]})},M=(s(49),s.p+"static/media/svaneti_1.4ff59c63.jpg"),q=s.p+"static/media/svaneti-video.87ef4509.mp4",U=s.p+"static/media/museum.8e7ce808.jpg",W=s.p+"static/media/kubdari.28d9523f.jpg",J=s.p+"static/media/ski.ae649dd4.jpg",V=s.p+"static/media/lamaria.236fc850.jpg",Y=s.p+"static/media/shkara.e5dd1170.jpg",Q=s.p+"static/media/shkara_1.bad09975.jpg";var X=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"svaneti",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",children:Object(i.jsx)("video",{src:q,autoPlay:!0,loop:!0,muted:!0,ref:function(a){return e=a}})}),Object(i.jsxs)("div",{className:"svaneti_container",children:[Object(i.jsxs)("div",{className:"svaneti_container_1",children:[Object(i.jsx)("img",{id:"svaneti_img",src:M}),Object(i.jsx)("div",{className:"svaneti_text",children:Object(i.jsx)("p",{children:"Breathtakingly wild and mysterious, Svaneti is an ancient land locked in the Caucasus, so remote that it was never tamed by any ruler. Uniquely picturesque villages and snow-covered, 4000m-plus peaks rising above flower-strewn alpine meadows provide a superb backdrop to the many walking trails. Svaneti\u2019s emblem is the koshki (defensive stone tower), designed to house villagers at times of invasion and local strife (until recently Svaneti was renowned for its murderous blood feuds). Around 175 koshkebi, most originally built between the 9th and 13th centuries, survive here today."})}),Object(i.jsx)("img",{id:"svaneti_img",src:Q}),Object(i.jsx)("div",{className:"svaneti_text",children:Object(i.jsx)("p",{children:'Shkhara is the high point and the eastern anchor of a massif known as the Bezingi (or Bezengi) Wall, a 12-kilometre-long (7.5 mi) ridge. It is a large, steep peak in a heavily glaciated region, and presents serious challenges to mountaineers. Its north face (on the Russian side) is 1,500 metres (4,900 ft) high and contains several classic difficult routes. The significant sub-summit Shkhara West, at 5,068 m (16,627 ft), is a climbing objective in its own right, and a traverse of the entire Bezingi Wall is considered "Europe\'s longest, most arduous, and most committing expedition".'})})]}),Object(i.jsxs)("div",{className:"svaneti_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"svaneti_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Svaneti"}),Object(i.jsx)("hr",{className:"svaneti_hr"})]}),Object(i.jsxs)("div",{className:"svaneti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://www.lonelyplanet.com/georgia/the-mountains/mestia/attractions/svaneti-history-ethnography-museum/a/poi-sig/502808/359333",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:U})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"History and Ethnography "})," Museum "]})})]}),Object(i.jsxs)("div",{className:"svaneti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://en.wikipedia.org/wiki/Ushguli_church_of_the_Mother_of_God",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:V})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Lamaria "})," Church"]})})]}),Object(i.jsxs)("div",{className:"svaneti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://en.wikipedia.org/wiki/Shkhara",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:Y})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Shkhara "}),"Trip"]})})]}),Object(i.jsxs)("div",{className:"svaneti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://gemrielia.ge/recipe/843-kubdari-svanuri-delikatesi/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:W})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Local"})," Cuisine"]})})]}),Object(i.jsxs)("div",{className:"svaneti_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiantravelguide.com/ka/satkhilamuro-kurorti-hatsvali",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:J})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Ski"})," Until April"]})})]})]})]}),Object(i.jsx)(H,{})]})},Z=(s(50),s.p+"static/media/shovi.95199d89.jpg"),$=s.p+"static/media/racha_video.53345c63.mp4",ee=s.p+"static/media/lobiani.608dc067.jpg",ae=s.p+"static/media/nikorwminda.025ef8bc.jpg",se=s.p+"static/media/shaori.add7a92d.jpg";var ie=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"racha",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",children:Object(i.jsx)("video",{src:$,autoPlay:!0,loop:!0,muted:!0,ref:function(a){return e=a}})}),Object(i.jsxs)("div",{className:"Racha_container",children:[Object(i.jsxs)("div",{className:"Racha_container_1",children:[Object(i.jsx)("img",{id:"Racha_img",src:Z}),Object(i.jsx)("div",{className:"Racha_text",children:Object(i.jsx)("p",{children:"Racha (also Ra\u010dha, Georgian: \u10e0\u10d0\u10ed\u10d0, Ra\u010d\u02bca) is a highland area in western Georgia, located in the upper Rioni river valley and hemmed in by the Greater Caucasus mountains. Under Georgia's current subdivision, Racha is included in the Racha-Lechkhumi and Kvemo Svaneti region (mkhare) as the municipalities of Oni and Ambrolauri. Racha occupies 2,854 km2 in the north-eastern corner of western Georgia. Spurs of the Greater Caucasus crest separates Racha from the Georgian historical regions of Svaneti and Lechkhumi on the north-west and from Imereti on the south, while the main Caucasus ridge forms a boundary with Russia\u2019s North Ossetia. On the east, Racha is bordered by breakaway South Ossetia, officially part of Georgia's Shida Kartli region."})})]}),Object(i.jsxs)("div",{className:"Racha_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"racha_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Racha"}),Object(i.jsx)("hr",{className:"racha_hr"})]}),Object(i.jsxs)("div",{className:"Racha_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiantravelguide.com/ka/shaoris-tsqalsatsavi",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:se})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"Shaori"})," Lake "]})})]}),Object(i.jsxs)("div",{className:"Racha_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://ka.wikipedia.org/wiki/%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D%E1%83%A0%E1%83%AC%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%98%E1%83%A1_%E1%83%A2%E1%83%90%E1%83%AB%E1%83%90%E1%83%A0%E1%83%98",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:ae})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Nikorwminda"})," church"]})})]}),Object(i.jsxs)("div",{className:"Racha_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiastartshere.com/georgian-food-cuisine/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:ee})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Georgian"})," Cuisine"]})})]})]})]}),Object(i.jsx)(H,{})]})},te=(s(51),s.p+"static/media/bakhmaro.81f829dd.jpg"),ce=s.p+"static/media/guria_video.e5786d75.mp4",ne=s.p+"static/media/gomismta.89d8be36.jpg",re=s.p+"static/media/tsitsinatela.b601ee73.jpg",oe=s.p+"static/media/dendrologiuri.e6dae231.jpg";var le=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"guria",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",children:Object(i.jsx)("video",{src:ce,autoPlay:!0,loop:!0,muted:!0,ref:function(a){return e=a}})}),Object(i.jsxs)("div",{className:"guria_container",children:[Object(i.jsxs)("div",{className:"guria_container_1",children:[Object(i.jsx)("img",{id:"guria_img",src:ne}),Object(i.jsx)("div",{className:"guria_text",children:Object(i.jsx)("p",{children:"It is a beautiful mountainous resort located at 2,000m altitude. Besides its heavenly landscape, beautiful pine forests, alpine meadows and amazing views the area is notable for its small cute cottages that are scattered throughout the green valleys with a river flowing through them. The resort offers its visitors the mixture of sea and mountain air that is beneficial for people with respiratory problems. Bakhmaro in Guria region is the highest alpine climatic resort in Georgia. The average annual relative humidity is 73 percent .The surrounding mountains are a source of Bakhmaro bottled spring water, which is similar to Borjomi water in its chemical composition. Every year, on August 19, dozens of riders compete in a horse race in Bakhmaro as part of the celebration of the Transfiguration of Jesus. How to get there: Bakhmaro is located in the district of Chokhatauri on the Meskheti mountain range in the Guria region. Distance from Tbilisi is around 360 km \u2013 a journey time of around four and half hours. This is the highest alpine climate resort in Georgia."})})]}),Object(i.jsxs)("div",{className:"guria_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"guria_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Guria"}),Object(i.jsx)("hr",{className:"guria_hr"})]}),Object(i.jsxs)("div",{className:"guria_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiantravelguide.com/en/bakhmaro-happiness-over-the-clouds",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:te})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"Bakhmaro"})," curort "]})})]}),Object(i.jsxs)("div",{className:"guria_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiantravelguide.com/en/tsitsinatela",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:re})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Tsitsinatela"})," park"]})})]}),Object(i.jsxs)("div",{className:"guria_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiantravelguide.com/en/shekvetili-dendrological-park",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:oe})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Dendrological"})," Park"]})})]})]})]}),Object(i.jsx)(H,{})]})},de=(s(52),s.p+"static/media/foti.a6ab6650.jpg"),je=s.p+"static/media/samegrelo_video.f153f3de.mp4",he=s.p+"static/media/elarji.c19eb0eb.jpg",me=s.p+"static/media/dadianebi.9efc858e.jpg",be=s.p+"static/media/kanioni.44d59b24.jpg";var xe=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){x.a.fromTo(e,2,{x:"-100%"},{x:"0%",ease:"Power3.easeInOut"})})),Object(i.jsxs)("div",{id:"samegrelo",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"img_container",children:Object(i.jsx)("video",{src:je,autoPlay:!0,loop:!0,muted:!0,ref:function(a){return e=a}})}),Object(i.jsxs)("div",{className:"samegrelo_container",children:[Object(i.jsxs)("div",{className:"samegrelo_container_1",children:[Object(i.jsx)("img",{id:"samegrelo_img",src:de}),Object(i.jsx)("div",{className:"samegrelo_text",children:Object(i.jsx)("p",{children:"The recorded history of Poti and its environments spans over 26 centuries. In Classical antiquity and the early Middle Ages, the area was occupied by the Greek polis of Phasis which was established by the colonists from Miletus led by one Themistagoras at the very end of the 7th, and probably at the beginning of the 6th century BC. The famed Greek semi-mythological voyage of Jason and the Argonauts in search of the Golden Fleece would have entered Georgia at this port and traveled up the river to what is today Kutaisi."})})]}),Object(i.jsxs)("div",{className:"samegrelo_container_2",children:[Object(i.jsxs)("div",{className:"reason-div",children:[Object(i.jsx)("div",{className:"reasons",children:Object(i.jsx)("h1",{id:"samegrelo_reasons",children:"Reasons"})}),Object(i.jsx)("h1",{children:"why u should visit Samegrelo"}),Object(i.jsx)("hr",{className:"samegrelo_hr"})]}),Object(i.jsxs)("div",{className:"samegrelo_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://en.wikipedia.org/wiki/Dadiani_Palace",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:me})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("span",{children:"Dadiani"})," Palace "]})})]}),Object(i.jsxs)("div",{className:"samegrelo_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://nationalparks.ge/en/site/martvilicanyon",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:be})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Martvili"})," canyon"]})})]}),Object(i.jsxs)("div",{className:"samegrelo_info_container ",children:[Object(i.jsx)("a",{className:"link",href:"https://georgiastartshere.com/georgian-food-cuisine/",target:"_blank",children:Object(i.jsx)("img",{className:"img",src:he})}),Object(i.jsx)("div",{className:"textHolder",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:"Unique"})," Dishes"]})})]})]})]}),Object(i.jsx)(H,{})]})};var ue=function(){return Object(i.jsx)(t.Fragment,{children:Object(i.jsx)(R.HashRouter,{children:Object(i.jsxs)(S.g,{children:[Object(i.jsx)(S.d,{exact:!0,path:"/",component:G}),Object(i.jsx)(S.d,{path:"/home",component:G}),Object(i.jsx)(S.d,{path:"/achara",component:I}),Object(i.jsx)(S.d,{path:"/kakheti",component:K}),Object(i.jsx)(S.d,{path:"/svaneti",component:X}),Object(i.jsx)(S.d,{path:"/racha",component:ie}),Object(i.jsx)(S.d,{path:"/guria",component:le}),Object(i.jsx)(S.d,{path:"/samegrelo",component:xe})]})})})},ge=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(a){var s=a.getCLS,i=a.getFID,t=a.getFCP,c=a.getLCP,n=a.getTTFB;s(e),i(e),t(e),c(e),n(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ue,{})}),document.getElementById("root")),ge()}},[[53,1,2]]]);
//# sourceMappingURL=main.2435e6a4.chunk.js.map