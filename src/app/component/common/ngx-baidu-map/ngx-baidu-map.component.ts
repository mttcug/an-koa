import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
declare const BMap: any;
@Component({
  selector: 'app-ngx-baidu-map',
  templateUrl: './ngx-baidu-map.component.html',
  styleUrls: ['./ngx-baidu-map.component.css']
})
export class NgxBaiduMapComponent   implements OnInit, OnChanges {

  @Input() address: string = '深圳市';
  @Input() apiKey: string = 'sIq3pmhG5n4xVuKQ8eKr1BiV0hsLP2ek';
  @Input() center: any;
  @Input() zoom = 15;
  @Input() enableScrollWheelZoom = false;                                  //鼠标是否可滚动缩放 默认不可以
  @Input() zoomControl = false;                                            //是否有缩放控件   默认没有

  @Output() getLocation: EventEmitter<any> = new EventEmitter();

  geoAddress = '';

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}


  ngOnChanges(changes: SimpleChanges) {
    //当zoomlevel改变刷新地图时marker不需要初始化位最开始定位的
    var address = this.geoAddress ? this.geoAddress : this.address;
    this.loader(this.apiKey, this.initMap.bind(this, address));
  }

  data = {
    point: '',
    address: ''
  };




  initMap(address) {
    var that = this;
    const container = this.elementRef.nativeElement.querySelector('.baidu-map-container');
    const map = new BMap.Map(container);

    //添加比列尺
    map.addControl(new BMap.ScaleControl({offset: new BMap.Size(100, 20)}));

    that.enableScrollWheelZoom ?  map.enableScrollWheelZoom(true) : '';

    that.zoomControl ? map.addControl(new BMap.NavigationControl()) : '';

    //地址解析
    var myGeo = new BMap.Geocoder();
    myGeo.getPoint(address, function (point) {
      if (point) {
        map.centerAndZoom(point, that.zoom);
        map.addOverlay(new BMap.Marker(point));
      } else {
        alert("您选择地址没有解析到结果!");
      }
    });



    map.addEventListener("click", (e) => {
      var pt = e.point;
      that.data.point = pt;
      const marker = new BMap.Marker(new BMap.Point(pt.lng, pt.lat));
      map.clearOverlays();
      map.addOverlay(marker);

      //逆地址解析
      myGeo.getLocation(pt, function (rs) {
        var addComp = rs.addressComponents;
        that.geoAddress = addComp.city + addComp.district + addComp.street;
        that.data.address = addComp;
        that.getLocation.emit(that.data);
      });
    });
  }

  loader(ak: string, callback: Function) {
    const MAP_URL = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit&s=1`;

    const baiduMap: MapObjct = window['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus.LOADING) {
      return baiduMap.callbacks.push(callback);
    }

    if (baiduMap && baiduMap.status === MapStatus.LOADED) {
      return callback();
    }

    window['baiduMap'] = {status: MapStatus.LOADING, callbacks: []};
    window['baidumapinit'] = function () {
      window['baiduMap'].status = MapStatus.LOADED;
      callback();
      window['baiduMap'].callbacks.forEach((cb: Function) => cb());
      window['baiduMap'].callbacks = [];
    };

    const createTag = function () {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = MAP_URL;
      document.body.appendChild(script);
    };
    createTag();
  }
}

export enum MapStatus {
  LOADING,
  LOADED,
}

export interface MapObjct {
  status: MapStatus;
  callbacks: Function[];
}



