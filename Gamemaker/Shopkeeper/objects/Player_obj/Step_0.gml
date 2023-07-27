/// @description Insert description here
// You can write your code in this editor
var downKey=keyboard_check(vk_down);
var upKey=keyboard_check(vk_up);
var leftKey=keyboard_check(vk_left);
var rightKey=keyboard_check(vk_right);

var psv=(downKey-upKey)*4;
var psh=(rightKey-leftKey)*4;

if ((room==Room1) and (tilemap_get_at_pixel(collision_tm,x,y))) then
	{
		show_debug_message("Found it!!!");
		room_goto(shop);
		show_debug_message("entered shop!");
		y=room_height-sprite_height;
		x=room_width/2;
	}
	
y+=psv;
x+=psh;




