# def creat_phone_number(nums):
#     output = '('+ ''.join(str(num) for num in nums[:3]) + ')' + ''.join(str(num) for num in nums[3:6])+'-'+''.join(str(num) for num in nums[6:])
#     print(output)

# creat_phone_number([1,2,3,4,5,6,7,8,9,0])

def rgb_to_hex_conversion(rgb):
    values = rgb[rgb.index('(')+1:rgb.index(')')].split(',')
    red = int(values[0])
    green = int(values[1])
    blue= int(values[2])
    hex_code = f"#{hex(red)[2:]:>02}{hex(green)[2:]:>02}{hex(blue)[2:]:>02}"
    print(hex_code)

rgb_to_hex_conversion('rgb(255,15,0)')