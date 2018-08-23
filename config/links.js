import platform from './platform/index'

const siteLinks = [
  {
    typeName: '交易平台', navs: [
    {name: '聚贸总站', url: platform.CONSTANT_MALL_URL},
    {name: '聚贸化工', url: platform.CONSTANT_JUMORE_HG_URL},
    {name: '聚贸有色', url: platform.CONSTANT_COLOURED_URL},
    {name: '聚贸煤炭', url: platform.CONSTANT_COAL_URL},
    {name: '聚贸钢铁', url: platform.CONSTANT_STEEL_URL},
    {name: '聚贸矿产', url: platform.CONSTANT_MINERAL_URL},
    {name: '聚贸农产品', url: platform.CONSTANT_AGRICULTURE_URL},
    {name: '聚贸工业品', url: platform.CONSTANT_INDUSTRIAL_URL},
    {name: '聚贸机械', url: platform.CONSTANT_MECHANICS_URL},
    {name: '聚贸消费品', url: platform.CONSTANT_CONSUMABLE_URL},
    {name: '聚贸食品', url: platform.CONSTANT_FOOD_URL},
  ]
  },
  {
    typeName: '服务平台', navs: [
    {name: '聚贸通', url: platform.CONSTANT_JUMORE_TONG_URL},
    {name: '聚运通', url: platform.CONSTANT_JUMORE_YUN_URL},
    {name: '聚融通', url: platform.CONSTANT_JUMORE_RONG_URL},
    {name: '聚智能', url: platform.CONSTANT_JUMORE_AI_URL},
    {name: '聚认证', url: platform.CONSTANT_JUMORE_CERT_URL},
    {name: '聚咨询', url: platform.CONSTANT_JUMORE_CONSULT_URL},
    {name: '大数聚', url: platform.CONSTANT_JUMORE_DSJ_URL},
  ]
  },
  {
    typeName: '聚贸特色', navs: [
    {name: '国家馆', url: platform.CONSTANT_JUMORE_G_URL},
    {name: '省馆', url: platform.CONSTANT_JUMORE_S_URL},
    {name: '一带一路馆', url: platform.CONSTANT_YIDAIYILU_URL},
    {name: '外贸500强馆', url: platform.CONSTANT_TOP500_URL},
    {name: '品牌馆', url: platform.CONSTANT_JUMORE_B_URL},
    {name: '清真馆', url: platform.CONSTANT_QINGZHEN_URL},
    {name: '阿斯塔纳馆', url: platform.CONSTANT_AIFC_URL},
    {name: '聚文化', url: platform.CONSTANT_JUMORE_Culture_URL},
    {name: '聚贸资讯', url: platform.CONSTANT_JUMORE_JMZX_URL}
  ]
  },
]
export default siteLinks
