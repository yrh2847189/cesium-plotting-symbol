import Polygon from './Polygon'
import * as mu from '../mapUtil'
import {Viewer, Entity, JulianDate} from 'cesium';


export default class Rectangle extends Polygon {
  maxPointNum = 2
  minPointNum = 2

  constructor(p: {}, viewer: Viewer, layer: Entity) {
    super({ type: '矩形', ...p }, viewer, layer)
  }

  calcuteShape(points: Array<Entity>, time: JulianDate) {
    if (points.length < this.minPointNum) {
      return []
    }
    let ctls = points.map((p) => {
      return mu.cartesian2lonlat(p.position.getValue(time))
    })
    let p1 = ctls[0]
    let p2 = ctls[1]
    let p = [
      [p1[0], p1[1]],
      [p1[0], p2[1]],
      [p2[0], p2[1]],
      [p2[0], p1[1]]
    ]
    return p.map((p) => mu.lonlat2Cartesian(p))
  }
}
