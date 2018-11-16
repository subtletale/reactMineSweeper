(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(2),u=a(3),i=a(5),l=a(4),m=a(6),p=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r))))._check=function(){a.props.onCheckSquare(a.props.rowKey,a.props.squareKey)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:function(e,t){var a=["subSquare"];switch(e){case" ":a.push("unTouched");break;case"_":a.push("clean");break;case"F":a.push("flagged");break;case"*":a.push("won"===t||"lost"===t?"bomb":"");break;case"@":a.push("flagged");break;default:a.push("close")}return a.join(" ")}(this.props.square,this.props.gameStatus),onClick:function(){return"won"===e.props.gameStatus||"lost"===e.props.gameStatus?null:e._check()}},function(e,t){switch(e){case" ":case"_":return"";case"F":return"F";case"*":return"won"===t||"lost"===t?"*":"";case"@":return"won"===t||"lost"===t?"@":"";default:return e}}(this.props.square,this.props.gameStatus)))}}]),t}(n.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.row.map(function(t,a){return r.a.createElement(p,{key:a,rowKey:e.props.rowKey,squareKey:a,square:t,onCheckSquare:e.props.onCheckSquare,gameStatus:e.props.gameStatus})});return r.a.createElement("div",{className:"gridRow"},t)}}]),t}(n.Component),f=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.board.map(function(t,a){return r.a.createElement(h,{key:a,rowKey:a,row:t,onCheckSquare:e.props.onCheckSquare,gameStatus:e.props.gameStatus})});return r.a.createElement("div",{className:"gridDiv"},t)}}]),t}(n.Component),d=a(8),b=a.n(d),g="https://minesweeper-api.herokuapp.com/games/",w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={currentGameId:0,currentBoard:[],numberOfMines:0,currentDifficulty:0,gameStatus:null},a.getURL=function(e,t,a,n,r){switch(e){case"newGame":return g+"?difficulty=".concat(a);case"check":return g+"".concat(a,"/check?row=").concat(n,"&col=").concat(r);case"flag":return g+"".concat(a,"/flag?row=").concat(n,"&col=").concat(r);case"existingGame":return g+"".concat(a)}},a._updateGameState=function(e,t,n,r,c){a.setState({currentGameId:e,currentBoard:t,numberOfMines:n,currentDifficulty:r,gameStatus:c})},a._startGame=function(e){b.a.post(a.getURL("newGame",e,null,null,null)).then(function(e){var t=e.data;a._updateGameState(t.id,t.board,t.mines,t.difficulty,t.state)})},a._checkSquare=function(e,t){b.a.post(a.getURL("check",null,a.state.currentGameId,e,t)).then(function(e){var t=e.data;a._updateGameState(t.id,t.board,t.mines,t.difficulty,t.state)})},a._flagSquare=function(){},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this,t=function(){return r.a.createElement("button",{className:"startButton",onClick:e._startGame},"New Game")};return r.a.createElement("main",{className:"wrapper"},r.a.createElement("h1",{className:"header"},"Tip-toe through the anti-tank mines"),r.a.createElement("div",{className:"container"},null==e.state.gameStatus?t():r.a.createElement(f,{board:e.state.currentBoard,onCheckSquare:e._checkSquare,gameStatus:e.state.gameStatus}),r.a.createElement("div",{className:"bracket"},r.a.createElement("div",{className:"bracketOverlay"}))),function(){if("won"===e.state.gameStatus||"lost"===e.state.gameStatus)return t()}())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.0862b245.chunk.js.map