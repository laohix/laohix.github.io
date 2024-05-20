import java_se from '../java_se/java_se'
import java_web from '../java_web/java_web'
import ssm from '../ssm/ssm'
import spzx from '../spzx/spzx'
import java_adv from '../java_adv/java_adv'
import mysql from '../mysql/mysql'
import cloud from '../cloud/cloud'
import datastructure from '../datastructure/datastructure'
import tingshu from '../tingshu/tingshu'
import interview from '../interview/interview'

const navbar = [
  {
    text: '首页',
    link: '/',
  },
  java_se,
  java_web,
  ssm,
  spzx,
  java_adv,
  mysql,
  cloud,
  datastructure,
  tingshu,
  ...interview,
]

export default navbar
