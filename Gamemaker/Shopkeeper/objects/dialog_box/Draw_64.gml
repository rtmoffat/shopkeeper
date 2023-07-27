/// @description Insert description here
// You can write your code in this editor
draw_self();
draw_set_color(c_blue);
draw_text(x,y,get_dialog());
if keyboard_check_pressed(vk_space) {
	show_debug_message("current dialog=",global.current_dialog);
	global.current_dialog+=1;
}
