(this["webpackJsonpti-ta"]=this["webpackJsonpti-ta"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(7),i=r.n(a),c=(r(13),r(8)),u=r(3),o=r(4),l=r(6),h=r(5),d=r(0);function j(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(c.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}var x=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(u.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(o.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares);e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O");var a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{children:e}),Object(d.jsx)("ol",{children:a})]})]})}}]),r}(n.a.Component);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.95db6fe5.chunk.js.map