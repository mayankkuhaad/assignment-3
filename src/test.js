const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}= require("./index")

myFileWriter("file1.txt","Hello. This is Mayank.")
myFileReader("file1.txt")
myFileUpdater("file1.txt", "Mayank")
myFileDeleter("file1.txt")