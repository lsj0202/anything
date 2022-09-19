# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import random 

luckyNum = random.sample(range(1,45),6)

print(sorted(luckyNum))

while True : 
	bonus = random.sample(range(1,45),1)
		if bonus not in luckyNum : 
			print(f'행운번호{luckyNum} 보너스번호{bonus}')
			import sys
			sys.exit()
