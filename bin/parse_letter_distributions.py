#!/usr/bin/python
# -*- coding: latin-1 -*-
import re
# http://en.wikipedia.org/wiki/Scrabble_letter_distributions
text = '''1 point: E ×12, A ×9, I ×9, O ×8, N ×6, R ×6, T ×6, L ×4, S ×4, U ×4
2 points: D ×4, G ×3
3 points: B ×2, C ×2, M ×2, P ×2
4 points: F ×2, H ×2, V ×2, W ×2, Y ×2
5 points: K ×1
8 points: J ×1, X ×1
10 points: Q ×1, Z ×1'''
letters = dict()
point_re = re.compile('^(?P<point>\d+) point')
letnum_re = re.compile('(?P<letter>[A-Z]) ×(?P<number>\d+)')
for line in text.split('\n'):
  point_m = point_re.search(line)
  print point_m.groups()[0]
  letnum_ms = letnum_re.findall(line)
  for let, num in letnum_ms:
      print let, num


    