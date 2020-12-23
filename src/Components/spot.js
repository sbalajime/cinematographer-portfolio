import {s3Bucket} from '../config'

let PHOTO_COUNT = 61;
let arr = [];
for (let i=1;i<= PHOTO_COUNT;i++) {
  if(i !== 13 ) {
    let obj = {
      src:`${s3Bucket}/spot/thumbnail/${i}.jpg`,
      width:3,
      height:3
    }
    arr.push(obj)
  }
 
}
export default arr
