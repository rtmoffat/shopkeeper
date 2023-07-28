// Script assets have changed for v2.3.0 see
// https://help.yoyogames.com/hc/en-us/articles/360005277377 for more information
function get_dialog() {
	return global.dialog_list[| global.current_dialog];
}


function load_dialog() {
//Speaker
//Action
	global.dialog={
		"Shopkeeper": {
			"Welcome":"Welcome to my shop!",
			"Purchase":"Thank you for your puchase!"
		}
	}
}
//Item
//Price
function load_items() {
	global.shop_items= {
		"Bombs":50,
		"Sword":30,
		"Shield":10,
		"Potion":50,
		"Hi-Potion":100
	}
}