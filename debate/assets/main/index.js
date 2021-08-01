System.register("chunks:///_virtual/GameDirector.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./cardSuits.ts","./SingleCard.ts","./CardDeck.ts","./TopBar.ts","./DialogBox.ts"],(function(e){"use strict";var r,a,t,i,n,o,c,s,l,d,p,y,u,g,m,D,h;return{setters:[function(e){r=e.applyDecoratedDescriptor,a=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized,n=e.defineProperty},function(e){o=e.cclegacy,c=e._decorator,s=e.Label,l=e.Component},function(e){d=e.createDeck,p=e.shuffleDeck,y=e.evaluateHand,u=e.logToUserPrompt},function(e){g=e.UpdateCardEffectType},function(e){m=e.CardDeck},function(e){D=e.TopBar},function(e){h=e.DialogBox}],execute:function(){var f,k,v,b,H,C,S,B,L,P,x,U,w;o._RF.push({},"22326GtDXxEN5XRUfsTsZRb","GameDirector",void 0);var z=c.ccclass,G=c.property;e("GameDirector",(f=z("GameDirector"),k=G({type:D}),v=G({type:m}),b=G({type:h}),H=G({type:s}),C=G({type:s}),f((L=r((B=function(e){function r(){for(var r,a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return r=e.call.apply(e,[this].concat(o))||this,t(i(r),"topBar",L,i(r)),t(i(r),"cardDeck",P,i(r)),t(i(r),"dialogBox",x,i(r)),t(i(r),"gameLog",U,i(r)),t(i(r),"deckPrompt",w,i(r)),n(i(r),"playerDeck",[]),n(i(r),"enemyDeck",[]),n(i(r),"playerDiscarded",[]),n(i(r),"enemyDiscarded",[]),n(i(r),"playerHand",[]),n(i(r),"enemyHand",[]),n(i(r),"gameScore",100),r}a(r,e);var o=r.prototype;return o.start=function(){this.initGame()},o.initGame=function(){var e;this.playerDeck=d(),this.enemyDeck=d(),this.playerDiscarded=[],this.enemyDiscarded=[],this.playerHand=this.playerDeck.splice(0,5),this.enemyHand=this.enemyDeck.splice(0,5),null===(e=this.cardDeck)||void 0===e||e.updateCards(this.playerHand)},o.speak=function(){var e,r=this,a=this.cardDeck.getCardsToReplace(),t=this.replaceUsedCards(this.playerHand,a,this.playerDeck,this.playerDiscarded);this.playerHand=t[0],this.playerDeck=t[1],this.playerDiscarded=t[2],null===(e=this.cardDeck)||void 0===e||e.updateCards(this.playerHand,g.Replaced);var i=function(){var e,a,t=y(r.playerHand),i=t[0],n=t[1],o=t[2],c=y(r.enemyHand),s=c[0],l=c[1],d=c[2],p=r.replaceUsedCards(r.playerHand,n,r.playerDeck,r.playerDiscarded);r.playerHand=p[0],r.playerDeck=p[1],r.playerDiscarded=p[2];var m=r.replaceUsedCards(r.enemyHand,l,r.enemyDeck,r.enemyDiscarded);return r.enemyHand=m[0],r.enemyDeck=m[1],r.enemyDiscarded=m[2],null===(e=r.cardDeck)||void 0===e||e.updateCards(r.playerHand,g.Used),r.gameScore+=i-s,r.gameScore<0?(r.setLog("You Lose"),void(r.deckPrompt.string="你输了...")):r.gameScore>200?(r.setLog("You Win"),void(r.deckPrompt.string="你赢了！")):(r.setLog("You: "+i+" Enemy: "+s+" "+JSON.stringify(o)),r.deckPrompt.string=u(o),r.dialogBox.speak(i,o[0].suit,s,d[0].suit),void(null===(a=r.topBar)||void 0===a||a.setScore(r.gameScore)))};0==a.length?i():this.scheduleOnce(i,.5)},o.replaceUsedCards=function(e,r,a,t){console.log("hand: "+JSON.stringify(e)+" to change: "+JSON.stringify(r));for(var i=0;i<e.length;i++)if(-1!=r.indexOf(e[i])){console.log("  card "+JSON.stringify(e[i])+" need to be redraw"),0==a.length&&(a=t,t=[],p(a));var n=a.shift();t.push(e[i]),e[i]=n}return[e,a,t]},o.setLog=function(e){this.gameLog.string=e},r}(l)).prototype,"topBar",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=r(B.prototype,"cardDeck",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=r(B.prototype,"dialogBox",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=r(B.prototype,"gameLog",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=r(B.prototype,"deckPrompt",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=B))||S));o._RF.pop()}}}));

System.register("chunks:///_virtual/CardDeck.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./SingleCard.ts"],(function(e){"use strict";var r,t,n,a,c,i,o,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){c=e.cclegacy,i=e._decorator,o=e.Component},function(e){s=e.SingleCard,u=e.UpdateCardEffectType}],execute:function(){var d,p,l,f,y;c._RF.push({},"2d3b81cX2dNmJSdhne93FeV","CardDeck",void 0);var C=i.ccclass,h=i.property;e("CardDeck",(d=C("CardDeck"),p=h({type:s}),d((y=r((f=function(e){function r(){for(var r,t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return r=e.call.apply(e,[this].concat(c))||this,n(a(r),"cards",y,a(r)),r}t(r,e);var c=r.prototype;return c.start=function(){},c.updateCards=function(e,r){void 0===r&&(r=u.None);for(var t=0;t<5;t++)this.cards[t].updateCard(e[t],r)},c.getCardsToReplace=function(){return this.cards.filter((function(e){return e.toBeReplaced})).map((function(e){return e.card}))},r}(o)).prototype,"cards",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l=f))||l));c._RF.pop()}}}));

System.register("chunks:///_virtual/cardSuits.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var e,t,u;return{setters:[function(r){e=r.createForOfIteratorHelperLoose},function(r){t=r.cclegacy,u=r.Enum}],execute:function(){r({createDeck:function(){for(var r=[n.Reason,n.Sentimental,n.Justice],t=[2,3,4,5,6,7,8,9,10,11,12,13,14],u=[],i=0,s=r;i<s.length;i++)for(var a,c=s[i],f=e(t);!(a=f()).done;){var p=a.value;u.push([p,c])}return o(u),u},evaluateHand:function(r){var e=[],t=[],u=[].concat(r);u=u.sort((function(r,e){return r[0]-e[0]}));for(var n=!0,o=u[0][0],i=1;i<5;i++){if(u[i][0]!=o+1){n=!1;break}o++}if(n){var s=10*u.map((function(r){return r[0]})).reduce((function(r,e){return r+e}));e.push({type:"straight",score:s,suit:u[4][1]}),t=r}for(var a=!0,c=u[0][1],f=1;f<5;f++)if(u[f][1]!=c){a=!1;break}if(a){var p=4*u.map((function(r){return r[0]})).reduce((function(r,e){return r+e}));e.push({type:"flush",score:p,suit:c}),t=r}o=u[0][0],c=u[0][1];for(var h=!1,l=1;l<5;l++)if(u[l][0]==o)if(h){var v=12*o;e.push({type:"three",score:v,suit:u[l][1]}),t.push(u[l]),h=!1}else h=!0,t.push(u[l],u[l-1]);else{if(h){h=!1;var d=6*o;e.push({type:"pair",score:d,suit:c})}o=u[l][0],c=u[l][1]}if(h){var g=6*o;e.push({type:"pair",score:g,suit:c})}0==e.length&&(e.push({type:"highest",score:u[4][0],suit:u[4][1]}),t.push(u[4]));return[e.map((function(r){return r.score})).reduce((function(r,e){return r+e})),t,e]},labelForCardValue:function(r){return["err","err","2","3","4","5","6","7","8","9","10","J","Q","K","A"][r]},logToUserPrompt:function(r){return"你打出了"+r.map((function(r){return function(r){var e=["理","情","义"];return{straight:"顺子",flush:"同题",three:"三全",pair:"一对",highest:"最大单张"}[r.type]+"("+e[r.suit]+r.score.toString()+")"}(r)})).join("，")},shuffleDeck:o}),t._RF.push({},"4811b4j/UxEOYMp+9d6wMaj","cardSuits",void 0);var n=r("Suit",u({Reason:0,Sentimental:1,Justice:2}));function o(r){for(var e=r.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),u=[r[t],r[e]];r[e]=u[0],r[t]=u[1]}}t._RF.pop()}}}));

System.register("chunks:///_virtual/DialogBox.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./cardSuits.ts"],(function(e){"use strict";var t,a,i,r,n,l,o,p,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,o=e.Label,p=e.Animation,c=e.Component},function(e){u=e.Suit}],execute:function(){var s,y,b,g,h,m,L,f,D,S,d;n._RF.push({},"8aac4KLRtpLu49VPZSTh2tr","DialogBox",void 0);var v=l.ccclass,z=l.property,w=[];w[u.Reason]=["这河狸么？这不合理","综上所述，理所当然","若非如此，又当如何"],w[u.Justice]=["这还是人么","如此厚颜无耻之人","不觉得不公平么"],w[u.Sentimental]=["此乃人之常情","你心不会痛么","反正就是不可以"];e("DialogBox",(s=v("DialogBox"),y=z({type:o}),b=z({type:o}),g=z({type:o}),h=z({type:o}),s((f=t((L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,i(r(t),"playerDamageLabel",f,r(t)),i(r(t),"playerSpeechLabel",D,r(t)),i(r(t),"enemyDamageLabel",S,r(t)),i(r(t),"enemySpeechLabel",d,r(t)),t}return a(t,e),t.prototype.speak=function(e,t,a,i){this.playerDamageLabel.string=e.toString(),this.enemyDamageLabel.string=a.toString();var r=function(e){return w[e][Math.floor(Math.random()*w[e].length)]};this.playerSpeechLabel.string=r(t),this.enemySpeechLabel.string=r(i),this.getComponent(p).play()},t}(c)).prototype,"playerDamageLabel",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(L.prototype,"playerSpeechLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(L.prototype,"enemyDamageLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=t(L.prototype,"enemySpeechLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=L))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/TopBar.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,i,n,o,l,a,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.defineProperty,n=e.assertThisInitialized,o=e.initializerDefineProperty},function(e){l=e.cclegacy,a=e._decorator,s=e.Node,u=e.Component}],execute:function(){var c,p,b,f,y,d,B,h,v;l._RF.push({},"b3052c06ntG2bufdMWQek+9","TopBar",void 0);var g=a.ccclass,_=a.property,T=200;e("TopBar",(c=g("TopBar"),p=_({type:s}),b=_({type:s}),f=_({type:s}),c((B=r((d=function(e){function r(){for(var r,t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return r=e.call.apply(e,[this].concat(l))||this,i(n(r),"MAX_BAR_LENGTH",620),o(n(r),"blueBar",B,n(r)),o(n(r),"redBar",h,n(r)),o(n(r),"sigil",v,n(r)),r}t(r,e);var l=r.prototype;return l.start=function(){},l.setScore=function(e){var r,t,i;null===(r=this.redBar)||void 0===r||r.setScale(e/T,1,1),null===(t=this.blueBar)||void 0===t||t.setScale((400-e)/T,1,1),null===(i=this.sigil)||void 0===i||i.setPosition((e-T)*this.MAX_BAR_LENGTH/T,0,0)},r}(u)).prototype,"blueBar",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=r(d.prototype,"redBar",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=r(d.prototype,"sigil",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=d))||y));l._RF.pop()}}}));

System.register("chunks:///_virtual/SingleCard.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./cardSuits.ts"],(function(e){"use strict";var t,i,a,r,l,n,o,s,c,u,p,d,h,b,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized,l=e.defineProperty},function(e){n=e.cclegacy,o=e._decorator,s=e.SpriteFrame,c=e.Label,u=e.Sprite,p=e.Node,d=e.Animation,h=e.Component},function(e){b=e.Suit,y=e.labelForCardValue}],execute:function(){var f,g,m,S,w,R,v,C,z,F,k,T,B,_,M,J,L,U,D,I,N,A;e("UpdateCardEffectType",void 0),n._RF.push({},"ba24bkJJKxDX7dH6+FSbsXy","SingleCard",void 0);var E,H=o.ccclass,O=o.property;!function(e){e[e.None=0]="None",e[e.Replaced=1]="Replaced",e[e.Used=2]="Used"}(E||(E=e("UpdateCardEffectType",{})));e("SingleCard",(f=H("SingleCard"),g=O({type:b}),m=O({type:s}),S=O({type:s}),w=O({type:s}),R=O({type:c}),v=O({type:u}),C=O({type:p}),z=O({type:p}),f((T=t((k=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,a(r(t),"value",T,r(t)),a(r(t),"suit",B,r(t)),a(r(t),"allowInteraction",_,r(t)),a(r(t),"toBeReplaced",M,r(t)),a(r(t),"ReasonSymbol",J,r(t)),a(r(t),"SentimentalSymbol",L,r(t)),a(r(t),"JusticeSymbol",U,r(t)),a(r(t),"valueLabel",D,r(t)),a(r(t),"suitSigil",I,r(t)),a(r(t),"replaceMask",N,r(t)),a(r(t),"switchCardMark",A,r(t)),l(r(t),"card",[2,b.Reason]),t}i(t,e);var n=t.prototype;return n.start=function(){this.updateCard([this.value,this.suit]),this.node.on(p.EventType.TOUCH_START,this.onTouchStart,this)},n.updateCard=function(e,t){if(void 0===t&&(t=E.None),console.log(this.card,e),this.card[0]!=e[0]||this.card[1]!=e[1]){this.card=e,this.value=e[0],this.suit=e[1],this.toBeReplaced=!0,this.toggleReplace();var i=this.getComponent(d);t===E.Used?(i.play("use_card"),this.scheduleOnce(this.switchCardFace,.2),console.info("use card")):t===E.Replaced?(i.play("replace_card"),this.scheduleOnce(this.switchCardFace,.1),console.info("replace card")):(this.switchCardFace(),console.info("default init"))}},n.switchCardFace=function(){switch(console.log("face switched"),this.valueLabel.string=y(this.value),this.suit){case b.Reason:this.suitSigil.spriteFrame=this.ReasonSymbol;break;case b.Sentimental:this.suitSigil.spriteFrame=this.SentimentalSymbol;break;case b.Justice:this.suitSigil.spriteFrame=this.JusticeSymbol}},n.toggleReplace=function(){this.toBeReplaced=!this.toBeReplaced,this.replaceMask.active=this.toBeReplaced,this.switchCardMark.active=this.toBeReplaced},n.onTouchStart=function(){this.allowInteraction&&this.toggleReplace()},t}(h)).prototype,"value",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),B=t(k.prototype,"suit",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return b.Reason}}),_=t(k.prototype,"allowInteraction",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),M=t(k.prototype,"toBeReplaced",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),J=t(k.prototype,"ReasonSymbol",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(k.prototype,"SentimentalSymbol",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=t(k.prototype,"JusticeSymbol",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(k.prototype,"valueLabel",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(k.prototype,"suitSigil",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(k.prototype,"replaceMask",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(k.prototype,"switchCardMark",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=k))||F));n._RF.pop()}}}));

System.register("chunks:///_virtual/SpeakButton.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameDirector.ts"],(function(t){"use strict";var e,r,n,o,i,a,c,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Node,u=t.Component},function(t){l=t.GameDirector}],execute:function(){var s,p,f,h,y,v;i._RF.push({},"fa929ALuHxGJ6cfqfJ2nX6r","SpeakButton",void 0);var g=a.ccclass,m=a.property;t("SpeakButton",(s=g("SpeakButton"),p=m({type:l}),s((y=e((h=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(o(e),"allowInteraction",y,o(e)),n(o(e),"gameDirector",v,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){this.node.on(c.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(){var t;null===(t=this.gameDirector)||void 0===t||t.speak()},e}(u)).prototype,"allowInteraction",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),v=e(h.prototype,"gameDirector",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./cardSuits.ts","./SingleCard.ts","./CardDeck.ts","./TopBar.ts","./DialogBox.ts","./GameDirector.ts","./SpeakButton.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});