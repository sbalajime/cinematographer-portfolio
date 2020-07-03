import {s3Bucket} from '../config'

let PHOTO_COUNT = 11;
let arr = [];
for (let i=1;i<= PHOTO_COUNT;i++) {
  let obj = {
    src:`${s3Bucket}/guest/thumbnail/${i}.jpg`,
    width:3,
    height:3
  }
  arr.push(obj)
}
export default arr

