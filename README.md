# bedee-Exam

BackendDev 
- ทำ REST API โดยใช้ Node JS (JavaScript หรือ TypeScript) สำหรับโปรแกรม To do list โดยห้ามเชื่อมต่อกับ database
(เพิ่มในส่วน ของ display_order เพื่อ ลองรับการทำ Drag and Drop จัดเรียง Task)

React Native
- Implement application by using React-native with Typescript with following requirement below. (สร้าง แอป โดยใช้ Typescript)
- Display 20 questions each question has 4 answer (โดยที่ โชว์ 20 คำถาม และ มี 4 ตัวเลือก )
- Every application re-load or re-open will be random question and answer ( โดยที่ทุกครั้ง เวลา รีโหลด หรือ รีเฟรช ต่อ Random ใหม่ทุกครั้ง)
- Display to Leader board (ทำการโชว์ Leader board ตอน ท้าย และ สามารถ เล่นใหม่ได้ )

Technical Test

- Write a function to find the longest common prefix string amongst an array of strings. (เขียนฟันชั่น prefix คำที่มีความยาว มากที่สุด)

If there is no common prefix, return an empty string "". (ถ้าเกิดไม่เจอ ตัวที่ซ้ำกันแล้วเป็น ค่า วาง ให้ ใส่ "")

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints: (ดัก error )
* 1 <= strs.length <= 200 (จำนวน Array ห้ามเกิน 200 ตัว)  
* 0 <= strs[i].length <= 200 (จำนวนตัวอักษรของ ที่อยู่ใน Array[i] ห้ามเกิน 200)
* strs[i] consists of only lower-case English letters. (Regx test จับเฉพาะ ภาษาอังกฤษพิเล็กเท่านั้น)


