# # Ruby Intro 4/13/2022
#
# ➜  lecture-notes git:(main) ✗ irb
#  :001 > 4 + 4
#  => 8
#  :002 > 6 - 3
#  => 3
#  :003 > 4 * 3
#  => 12
#  :004 > 6 / 2
#  => 3
#  :005 > 5 ** 3
#  => 125
#  :006 > 6 % 3
#  => 0
#  :007 > 5 / 2
#  => 2
#  :008 > 5.0
#  => 5.0
#  :009 > 5 / 2.0
#  => 2.5
#  :010 > 'hello'
#  => "hello"
#  :011 > "hi y'all"
#  => "hi y'all"
#  :012 > 7 > 9
#  => false
#  :013 > 8 < 3
#  => false
#  :014 > 8 <= 8
#  => true
#  :015 > 9 >= 3+6
#  => true
#  :016 > 5 != 5
#  => false
#  :017 > 6 == 3+3
#  => true
#  :018 > 5 == 5 && 4 == 2+2
#  => true
#  :019 > 5 == 4 || 4 == 2+2
#  => true
#  :020 > nil
#  => nil
#  :021 > my_name = 'sarah'
#  => "sarah"
#  :022 > "Hi there #{my_name}"
#  => "Hi there sarah"
#  :023 > my_name.length
#  => 5
#  :024 > my_name.upcase
#  => "SARAH"
#  :025 > my_name.capitalize
#  => "Sarah"
#  :026 > my_name.reverse
#  => "haras"
#  :027 > my_name * 3
#  => "sarahsarahsarah"
#  :028 > my_name.delete'h'
#  => "sara"
#  :029 > my_name.delete('h')
#  => "sara"
#  :030 > 'shaharahah'.delete('h')
#  => "saaraa"
#  :031 > my_name.include?('s')
#  => true
#  :032 > my_name.include?('S')
#  => false
#  :033 > my_name.class
#  => String
#  :034 > 2.class
#  => Integer
#  :035 > 4.0.class
#  => Float
#  :036 > true.class
#  => TrueClass
#  :037 > false.class
#  => FalseClass
#  :038 > nil.class
#  => NilClass
#  :039 > 4.to_s
#  => "4"
#  :040 > '9'.to_i
#  => 9
#  :041 > my_name
#  => "sarah"
#  :042 > my_name
#  => "sarah"
#  :043 > my_name = my_name.capitalize
#  => "Sarah"
#  :044 > my_name
#  => "Sarah"
#  :045 > my_name = 'sarah'
#  => "sarah"
#  :046 > my_name.capitalize
#  => "Sarah"
#  :047 > my_name
#  => "sarah"
#  :048 > my_name.capitalize!
#  => "Sarah"
#  :049 > my_name
#  => "Sarah"
#  :050 > my_nums = [2, 3, 4, 5]
#  => [2, 3, 4, 5]
#  :051 > my_nums
#  => [2, 3, 4, 5]
#  :053 > my_nums.length
#  => 4
#  :054 > my_nums[0]
#  => 2
#  :055 > my_nums[3]
#  => 5
#  :056 > my_nums[-1]
#  => 5
#  :057 > my_nums[-2]
#  => 4
#  :058 > my_nums
#  => [2, 3, 4, 5]
#  :059 > my_nums.first
#  => 2
#  :060 > my_nums.last
#  => 5
#  :061 > my_nums.reverse
#  => [5, 4, 3, 2]
#  :062 > my_nums
#  => [2, 3, 4, 5]
#  :063 > my_nums.reverse.first
#  => 5
#  :064 > my_nums.reverse.first.length
#  :065 > my_nums[3]
#  => 5
#  :066 > my_nums[3] = 7
#  => 7
#  :067 > my_name
#  => "Sarah"
#  :068 > my_nums
#  => [2, 3, 4, 7]
#  :069 > my_nums << 99
#  => [2, 3, 4, 7, 99]
#  => [2, 3, 4, 7, 99]
#  :072 > exit
# ➜  lecture-notes git:(main) ✗ irb
#  :001 > exit
# ➜  lecture-notes git:(main) ✗ irb
#  :001 > my_nums
#  :002 > exit



my_nums = [3, 4, 5, 6, 7]

# puts my_nums
# put string

# p my_nums
# print


p my_nums.pop
p my_nums
