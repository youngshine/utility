(function(Vue){

Vue.component("posimg",{
	template:"<div style='width:min-content;position:relative;'><img v-bind:src='src' ><div style='position:absolute;'>x轴{{percentX}}%  {{x}}px<br> y轴{{percentY}}% {{y}}px</div></div>",
	props:{
		'src':{
			type:String,
			required:true,
		}
	},
	data:function(){
		return {
			imgW:100,
			imgH:100,
			x:0,
			y:0,
		};
	},
	computed:{
		percentX:function(){
			return ((this.x/this.imgW)*100).toFixed(2);
		},
		percentY:function(){
			return ((this.y/this.imgH)*100).toFixed(2);
		}
	},
	mounted:function(){
		this.$el.addEventListener("click",function(e){
			this.imgW = this.$el.clientWidth;
			this.imgH = this.$el.clientHeight;
			this.x = e.offsetX;
			this.y = e.offsetY;
		}.bind(this))
	}
});

})(Vue);