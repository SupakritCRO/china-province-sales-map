import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ChinaMap from "../components/ChinaMap";
import ChinaProvinceMap from "../components/ChinaProvinceMap";
import StoreProductsTable from "../components/StoreProductsTable";

export const storeLossMakingByProvince: Record<
  string,
  {
    name: string;
    value: number;
  }[]
> = {
  Anhui: [
    { name: "Anhui Store 1", value: 701191 },
    { name: "Anhui Store 2", value: 500000 },
    { name: "Anhui Store 3", value: 300000 },
    { name: "Anhui Store 4", value: 100000 },
    { name: "Anhui Store 5", value: 350000 },
  ],
  Beijing: [
    { name: "Beijing Store 1", value: 2420103 },
    { name: "Beijing Store 2", value: 1000000 },
    { name: "Beijing Store 3", value: 5000000 },
    { name: "Beijing Store 4", value: 3000000 },
    { name: "Beijing Store 5", value: 2000000 },
  ],
  Chongqing: [
    { name: "Chongqing Store 1", value: 369513 },
    { name: "Chongqing Store 2", value: 200000 },
    { name: "Chongqing Store 3", value: 1000000 },
    { name: "Chongqing Store 4", value: 1500000 },
    { name: "Chongqing Store 5", value: 1200000 },
  ],
  Fujian: [
    { name: "Fujian Store 1", value: 2231914 },
    { name: "Fujian Store 2", value: 1000000 },
    { name: "Fujian Store 3", value: 500000 },
    { name: "Fujian Store 4", value: 600000 },
    { name: "Fujian Store 5", value: 450000 },
  ],
  Gansu: [
    { name: "Gansu Store 1", value: 1379192 },
    { name: "Gansu Store 2", value: 80000 },
    { name: "Gansu Store 3", value: 750000 },
    { name: "Gansu Store 4", value: 700000 },
    { name: "Gansu Store 5", value: 650000 },
  ],
  Guangdong: [
    { name: "Guangdong Store 1", value: 100000 },
    { name: "Guangdong Store 2", value: 900000 },
    { name: "Guangdong Store 3", value: 850000 },
    { name: "Guangdong Store 4", value: 800000 },
    { name: "Guangdong Store 5", value: 750000 },
  ],
  Guangxi: [
    { name: "Guangxi Store 1", value: 2702186 },
    { name: "Guangxi Store 2", value: 250000 },
    { name: "Guangxi Store 3", value: 240000 },
    { name: "Guangxi Store 4", value: 230000 },
    { name: "Guangxi Store 5", value: 220000 },
  ],
  Guizhou: [
    { name: "Guizhou Store 1", value: 2084036 },
    { name: "Guizhou Store 2", value: 1800000 },
    { name: "Guizhou Store 3", value: 170000 },
    { name: "Guizhou Store 4", value: 1600000 },
    { name: "Guizhou Store 5", value: 1500000 },
  ],
  Hainan: [
    { name: "Hainan Store 1", value: 641492 },
    { name: "Hainan Store 2", value: 600000 },
    { name: "Hainan Store 3", value: 550000 },
    { name: "Hainan Store 4", value: 500000 },
    { name: "Hainan Store 5", value: 450000 },
  ],
  Hebei: [
    { name: "Hebei Store 1", value: 417046 },
    { name: "Hebei Store 2", value: 400000 },
    { name: "Hebei Store 3", value: 380000 },
    { name: "Hebei Store 4", value: 360000 },
    { name: "Hebei Store 5", value: 340000 },
  ],
  Heilongjiang: [
    { name: "Heilongjiang Store 1", value: 1994062 },
    { name: "Heilongjiang Store 2", value: 190000 },
    { name: "Heilongjiang Store 3", value: 180000 },
    { name: "Heilongjiang Store 4", value: 1700000 },
    { name: "Heilongjiang Store 5", value: 1600000 },
  ],
  Henan: [
    { name: "Henan Store 1", value: 535743 },
    { name: "Henan Store 2", value: 520000 },
    { name: "Henan Store 3", value: 510000 },
    { name: "Henan Store 4", value: 500000 },
    { name: "Henan Store 5", value: 490000 },
  ],
  Hubei: [
    { name: "Hubei Store 1", value: 365518 },
    { name: "Hubei Store 2", value: 350000 },
    { name: "Hubei Store 3", value: 340000 },
    { name: "Hubei Store 4", value: 330000 },
    { name: "Hubei Store 5", value: 320000 },
  ],
  Hunan: [
    { name: "Hunan Store 1", value: 4401703 },
    { name: "Hunan Store 2", value: 430000 },
    { name: "Hunan Store 3", value: 420000 },
    { name: "Hunan Store 4", value: 410000 },
    { name: "Hunan Store 5", value: 400000 },
  ],
  "Nei Mongol": [
    { name: "Nei Mongol Store 1", value: 1333131 },
    { name: "Nei Mongol Store 2", value: 130000 },
    { name: "Nei Mongol Store 3", value: 125000 },
    { name: "Nei Mongol Store 4", value: 1200000 },
    { name: "Nei Mongol Store 5", value: 115000 },
  ],
  Jiangsu: [
    { name: "Jiangsu Store 1", value: 4666258 },
    { name: "Jiangsu Store 2", value: 450000 },
    { name: "Jiangsu Store 3", value: 440000 },
    { name: "Jiangsu Store 4", value: 430000 },
    { name: "Jiangsu Store 5", value: 420000 },
  ],
  Jiangxi: [
    { name: "Jiangxi Store 1", value: 2393953 },
    { name: "Jiangxi Store 2", value: 230000 },
    { name: "Jiangxi Store 3", value: 22000 },
    { name: "Jiangxi Store 4", value: 210000 },
    { name: "Jiangxi Store 5", value: 200000 },
  ],
  Jilin: [
    { name: "Jilin Store 1", value: 1337556 },
    { name: "Jilin Store 2", value: 130000 },
    { name: "Jilin Store 3", value: 125000 },
    { name: "Jilin Store 4", value: 120000 },
    { name: "Jilin Store 5", value: 1150000 },
  ],
  Liaoning: [
    { name: "Liaoning Store 1", value: 226236 },
    { name: "Liaoning Store 2", value: 220000 },
    { name: "Liaoning Store 3", value: 215000 },
    { name: "Liaoning Store 4", value: 210000 },
    { name: "Liaoning Store 5", value: 200000 },
  ],
  Ningxia: [
    { name: "Ningxia Store 1", value: 376832 },
    { name: "Ningxia Store 2", value: 35000 },
    { name: "Ningxia Store 3", value: 340000 },
    { name: "Ningxia Store 4", value: 330000 },
    { name: "Ningxia Store 5", value: 320000 },
  ],
  Qinghai: [
    { name: "Qinghai Store 1", value: 300000 },
    { name: "Qinghai Store 2", value: 290000 },
    { name: "Qinghai Store 3", value: 280000 },
    { name: "Qinghai Store 4", value: 270000 },
    { name: "Qinghai Store 5", value: 260000 },
  ],
  Shaanxi: [
    { name: "Shaanxi Store 1", value: 2109576 },
    { name: "Shaanxi Store 2", value: 205000 },
    { name: "Shaanxi Store 3", value: 200000 },
    { name: "Shaanxi Store 4", value: 195000 },
    { name: "Shaanxi Store 5", value: 1900000 },
  ],
  Shandong: [
    { name: "Shandong Store 1", value: 558513 },
    { name: "Shandong Store 2", value: 550000 },
    { name: "Shandong Store 3", value: 540000 },
    { name: "Shandong Store 4", value: 530000 },
    { name: "Shandong Store 5", value: 520000 },
  ],
  Shanghai: [
    { name: "Shanghai Store 1", value: 1397857 },
    { name: "Shanghai Store 2", value: 100000 },
    { name: "Shanghai Store 3", value: 500000 },
    { name: "Shanghai Store 4", value: 450000 },
    { name: "Shanghai Store 5", value: 400000 },
  ],
  Shanxi: [
    { name: "Shanxi Store 1", value: 1821369 },
    { name: "Shanxi Store 2", value: 175000 },
    { name: "Shanxi Store 3", value: 170000 },
    { name: "Shanxi Store 4", value: 1650000 },
    { name: "Shanxi Store 5", value: 160000 },
  ],
  Sichuan: [
    { name: "Sichuan Store 1", value: 4571637 },
    { name: "Sichuan Store 2", value: 450000 },
    { name: "Sichuan Store 3", value: 440000 },
    { name: "Sichuan Store 4", value: 430000 },
    { name: "Sichuan Store 5", value: 420000 },
  ],
  Tianjin: [
    { name: "Tianjin Store 1", value: 1001889 },
    { name: "Tianjin Store 2", value: 950000 },
    { name: "Tianjin Store 3", value: 900000 },
    { name: "Tianjin Store 4", value: 85000 },
    { name: "Tianjin Store 5", value: 800000 },
  ],
  Xizang: [
    { name: "Xizang Store 1", value: 116943 },
    { name: "Xizang Store 2", value: 110000 },
    { name: "Xizang Store 3", value: 105000 },
    { name: "Xizang Store 4", value: 100000 },
    { name: "Xizang Store 5", value: 95000 },
  ],
  "Xinjiang Uygur": [
    { name: "Xinjiang Uygur Store 1", value: 1508394 },
    { name: "Xinjiang Uygur Store 2", value: 145000 },
    { name: "Xinjiang Uygur Store 3", value: 140000 },
    { name: "Xinjiang Uygur Store 4", value: 1350000 },
    { name: "Xinjiang Uygur Store 5", value: 1300000 },
  ],
  Yunnan: [
    { name: "Yunnan Store 1", value: 2512391 },
    { name: "Yunnan Store 2", value: 245000 },
    { name: "Yunnan Store 3", value: 240000 },
    { name: "Yunnan Store 4", value: 235000 },
    { name: "Yunnan Store 5", value: 230000 },
  ],
  Zhejiang: [
    { name: "Zhejiang Store 1", value: 428482 },
    { name: "Zhejiang Store 2", value: 420000 },
    { name: "Zhejiang Store 3", value: 41000 },
    { name: "Zhejiang Store 4", value: 400000 },
    { name: "Zhejiang Store 5", value: 390000 },
  ],
};

export const storeCoordinates: Record<string, [number, number]> = {
  // Anhui (base near Hefei: [117.283042, 31.86119])
  "Anhui Store 1": [117.283042, 31.86119],
  "Anhui Store 2": [117.283542, 31.86169],
  "Anhui Store 3": [117.282542, 31.86069],
  "Anhui Store 4": [117.284042, 31.86019],
  "Anhui Store 5": [117.283142, 31.85969],
  // Beijing (using Beijing coordinates with slight variations)
  "Beijing Store 1": [115.8074, 39.9042],
  "Beijing Store 2": [116.1122, 40.42],
  "Beijing Store 3": [116.274, 39.7042],
  "Beijing Store 4": [116.8074, 40.2042],
  "Beijing Store 5": [116.5074, 40.6042],
  // Chongqing (base near Chongqing: [106.504962, 29.533155])
  "Chongqing Store 1": [106.504962, 29.533155],
  "Chongqing Store 2": [106.505562, 29.533755],
  "Chongqing Store 3": [106.504362, 29.532555],
  "Chongqing Store 4": [106.505062, 29.532955],
  "Chongqing Store 5": [106.504762, 29.533355],
  // Fujian (base near Fuzhou: [119.296494, 26.074508])
  "Fujian Store 1": [119.296494, 26.074508],
  "Fujian Store 2": [118.297094, 27.075108],
  "Fujian Store 3": [118.795894, 25.073908],
  "Fujian Store 4": [116.796694, 25.574208],
  "Fujian Store 5": [117.597194, 27.573708],
  // Gansu (base near Lanzhou: [103.834304, 36.061089])
  "Gansu Store 1": [103.834304, 36.061089],
  "Gansu Store 2": [107.435304, 36.062089],
  "Gansu Store 3": [105.833304, 34.560089],
  "Gansu Store 4": [103.834804, 34.061589],
  "Gansu Store 5": [103.833804, 37.060589],
  // Guangdong (base near Guangzhou: [113.264385, 23.129112])
  "Guangdong Store 1": [113.264385, 25.129112],
  "Guangdong Store 2": [112.265385, 24.130112],
  "Guangdong Store 3": [116.263385, 24.128112],
  "Guangdong Store 4": [115.264885, 23.129612],
  "Guangdong Store 5": [114.263885, 24.128612],
  // Guangxi (base near Nanning: [108.327546, 22.815478])
  "Guangxi Store 1": [110.327546, 25.815478],
  "Guangxi Store 2": [108.328046, 23.816478],
  "Guangxi Store 3": [108.327046, 24.814478],
  "Guangxi Store 4": [108.327546, 22.816478],
  "Guangxi Store 5": [110.328546, 22.815978],
  // Guizhou (base near Guiyang: [106.630153, 26.647661])
  "Guizhou Store 1": [104.030153, 27.047661],
  "Guizhou Store 2": [107.631153, 29.048661],
  "Guizhou Store 3": [108.029153, 25.646661],
  "Guizhou Store 4": [108.630653, 26.447161],
  "Guizhou Store 5": [105.991653, 27.646661],
  // Hainan (base near Haikou: [110.33119, 20.031971])
  "Hainan Store 1": [109.63119, 19.031971],
  "Hainan Store 2": [109.33219, 18.532971],
  "Hainan Store 3": [108.93019, 18.830971],
  "Hainan Store 4": [110.33169, 19.531471],
  "Hainan Store 5": [110.33269, 18.830971],
  // Hebei (base near Shijiazhuang: [114.502461, 38.045474])
  "Hebei Store 1": [117.002461, 38.045474],
  "Hebei Store 2": [116.503461, 41.546474],
  "Hebei Store 3": [115.001461, 40.044474],
  "Hebei Store 4": [115.502961, 37.645974],
  "Hebei Store 5": [114.503961, 38.044974],
  // Heilongjiang (base near Harbin: [126.642464, 45.756966])
  "Heilongjiang Store 1": [128.42464, 47.756966],
  "Heilongjiang Store 2": [123.643464, 52.657966],
  "Heilongjiang Store 3": [131.41464, 47.355966],
  "Heilongjiang Store 4": [129.642964, 45.756466],
  "Heilongjiang Store 5": [126.643964, 45.755966],
  // Henan (base near Zhengzhou: [113.665412, 34.757975])
  "Henan Store 1": [113.665412, 34.757975],
  "Henan Store 2": [113.666412, 34.758975],
  "Henan Store 3": [113.664412, 34.756975],
  "Henan Store 4": [113.665912, 34.757475],
  "Henan Store 5": [113.666912, 34.756975],
  // Hubei (base near Wuhan: [114.298572, 30.584355])
  "Hubei Store 1": [114.298572, 30.584355],
  "Hubei Store 2": [114.299572, 30.585355],
  "Hubei Store 3": [114.297572, 30.583355],
  "Hubei Store 4": [114.298572, 30.583855],
  "Hubei Store 5": [114.299572, 30.583355],
  // Hunan (base near Changsha: [112.982279, 28.19409])
  "Hunan Store 1": [110.082279, 27.59409],
  "Hunan Store 2": [110.983279, 28.99509],
  "Hunan Store 3": [111.581279, 26.19309],
  "Hunan Store 4": [112.282779, 28.19459],
  "Hunan Store 5": [112.983779, 25.59359],
  // Nei Mongol (base near Hohhot: [111.670801, 40.818311])
  "Nei Mongol Store 1": [102.670801, 40.818311],
  "Nei Mongol Store 2": [121.671801, 49.819311],
  "Nei Mongol Store 3": [116.669801, 43.817311],
  "Nei Mongol Store 4": [116.670301, 48.818811],
  "Nei Mongol Store 5": [111.671301, 40.817811],
  // Jiangsu (base near Nanjing: [118.767413, 32.041544])
  "Jiangsu Store 1": [118.767413, 32.041544],
  "Jiangsu Store 2": [118.768413, 32.042544],
  "Jiangsu Store 3": [118.766413, 32.040544],
  "Jiangsu Store 4": [118.767913, 32.041044],
  "Jiangsu Store 5": [118.768913, 32.040544],
  // Jiangxi (base near Nanchang: [115.858197, 28.682892])
  "Jiangxi Store 1": [115.858197, 28.682892],
  "Jiangxi Store 2": [115.859197, 28.683892],
  "Jiangxi Store 3": [115.857197, 28.681892],
  "Jiangxi Store 4": [115.858697, 28.682392],
  "Jiangxi Store 5": [115.859697, 28.681892],
  // Jilin (base near Changchun: [125.3245, 43.886841])
  "Jilin Store 1": [124.3245, 44.886841],
  "Jilin Store 2": [125.3255, 43.887841],
  "Jilin Store 3": [127.3235, 41.885841],
  "Jilin Store 4": [127.3235, 43.885841],
  "Jilin Store 5": [124.325, 43.885841],
  // Liaoning (base near Shenyang: [123.43147, 41.805699])
  "Liaoning Store 1": [124.43147, 40.395699],
  "Liaoning Store 2": [121.43247, 41.806699],
  "Liaoning Store 3": [120.43047, 40.804699],
  "Liaoning Store 4": [123.43197, 41.805199],
  "Liaoning Store 5": [119.43297, 41.804699],
  // Ningxia (base near Yinchuan: [106.230909, 38.487194])
  "Ningxia Store 1": [106.230909, 38.487194],
  "Ningxia Store 2": [106.231909, 38.488194],
  "Ningxia Store 3": [106.229909, 38.486194],
  "Ningxia Store 4": [106.230409, 38.487694],
  "Ningxia Store 5": [106.231409, 38.486694],
  // Qinghai (base near Xining: [101.767921, 36.640739])
  "Qinghai Store 1": [101.767921, 36.640739],
  "Qinghai Store 2": [100.768921, 35.141739],
  "Qinghai Store 3": [91.766921, 37.639739],
  "Qinghai Store 4": [94.167421, 34.640239],
  "Qinghai Store 5": [96.768421, 36.639739],
  // Shaanxi (base near Xi'an: [108.939621, 34.341568])
  "Shaanxi Store 1": [108.939621, 34.341568],
  "Shaanxi Store 2": [108.940621, 34.342568],
  "Shaanxi Store 3": [108.938621, 34.340568],
  "Shaanxi Store 4": [108.939121, 34.341068],
  "Shaanxi Store 5": [108.940121, 34.340568],
  // Shandong (base near Jinan: [117.000923, 36.675807])
  "Shandong Store 1": [117.500923, 34.675807],
  "Shandong Store 2": [117.001923, 37.676807],
  "Shandong Store 3": [120.999923, 36.674807],
  "Shandong Store 4": [119.000423, 36.675307],
  "Shandong Store 5": [117.001423, 36.674807],
  // Shanghai (base near Shanghai: [121.4737, 31.2304])
  "Shanghai Store 1": [121.4737, 31.2304],
  "Shanghai Store 2": [121.4747, 31.2314],
  "Shanghai Store 3": [121.4727, 31.2294],
  "Shanghai Store 4": [121.4732, 31.2309],
  "Shanghai Store 5": [121.4742, 31.2299],
  // Shanxi (base near Taiyuan: [112.549248, 37.857014])
  "Shanxi Store 1": [112.549248, 37.857014],
  "Shanxi Store 2": [112.550248, 37.858014],
  "Shanxi Store 3": [112.548248, 37.856014],
  "Shanxi Store 4": [112.549748, 37.857514],
  "Shanxi Store 5": [112.550748, 37.856514],
  // Sichuan (base near Chengdu: [104.066541, 30.572269])
  "Sichuan Store 1": [104.066541, 30.572269],
  "Sichuan Store 2": [102.067541, 32.573269],
  "Sichuan Store 3": [105.065541, 29.571269],
  "Sichuan Store 4": [103.066041, 28.572769],
  "Sichuan Store 5": [102.667041, 33.571769],
  // Tianjin (base near Tianjin: [117.361648, 39.343357])
  "Tianjin Store 1": [117.361648, 39.343357],
  "Tianjin Store 2": [117.362648, 39.344357],
  "Tianjin Store 3": [117.360648, 39.342357],
  "Tianjin Store 4": [117.361148, 39.343857],
  "Tianjin Store 5": [117.362148, 39.342857],
  // Xizang (base near Lhasa: [91.1322, 29.6604])
  "Xizang Store 1": [95.1322, 30.6604],
  "Xizang Store 2": [82.1332, 32.6614],
  "Xizang Store 3": [88.1312, 33.6594],
  "Xizang Store 4": [86.1327, 29.6609],
  "Xizang Store 5": [91.1337, 29.6599],
  // Xinjiang Uygur (base near Urumqi: [81.2168, 43.8256])
  "Xinjiang Uygur Store 1": [91.2168, 43.8256],
  "Xinjiang Uygur Store 2": [82.2178, 42.8266],
  "Xinjiang Uygur Store 3": [83.2158, 37.8246],
  "Xinjiang Uygur Store 4": [86.2163, 45.8251],
  "Xinjiang Uygur Store 5": [88.2173, 40.8241],
  // Yunnan (base near Kunming: [102.712251, 25.040609])
  "Yunnan Store 1": [102.712251, 25.040609],
  "Yunnan Store 2": [99.713251, 27.041609],
  "Yunnan Store 3": [100.711251, 25.039609],
  "Yunnan Store 4": [101.712751, 23.040109],
  "Yunnan Store 5": [102.713751, 25.039609],
  // Zhejiang (base near Hangzhou: [120.15507, 30.274085])
  "Zhejiang Store 1": [120.15507, 30.274085],
  "Zhejiang Store 2": [120.15607, 30.275085],
  "Zhejiang Store 3": [120.15407, 30.273085],
  "Zhejiang Store 4": [120.15557, 30.274585],
  "Zhejiang Store 5": [120.15657, 30.273585],
};
export const storeProducts: Record<string, any[]> = {
  "Beijing Store 1": [
    {
      productID: 1,
      name: "Organic Green Tea",
      salesAmount: 560000,
      quantity: 1200,
      totalGP: -320103,
    },
    {
      productID: 2,
      name: "Premium Jasmine Rice",
      salesAmount: 480000,
      quantity: 900,
      totalGP: -280000,
    },
    {
      productID: 3,
      name: "Imported Olive Oil",
      salesAmount: 420000,
      quantity: 600,
      totalGP: -250000,
    },
    {
      productID: 4,
      name: "Fresh Salmon Fillet",
      salesAmount: 300000,
      quantity: 500,
      totalGP: -200000,
    },
    {
      productID: 5,
      name: "Handmade Dumplings",
      salesAmount: 270000,
      quantity: 800,
      totalGP: -190000,
    },
    {
      productID: 6,
      name: "Almond Milk - Unsweetened",
      salesAmount: 200000,
      quantity: 1000,
      totalGP: -180000,
    },
    {
      productID: 7,
      name: "Natural Yogurt",
      salesAmount: 180000,
      quantity: 1100,
      totalGP: -160000,
    },
    {
      productID: 8,
      name: "Sichuan Spicy Sauce",
      salesAmount: 140000,
      quantity: 750,
      totalGP: -140000,
    },
    {
      productID: 9,
      name: "Tofu - Firm",
      salesAmount: 100000,
      quantity: 95,
      totalGP: -110000,
    },
    {
      productID: 10,
      name: "Seasonal Fruit Basket",
      salesAmount: 90000,
      quantity: 600,
      totalGP: -110000,
    },
  ],
};

export default function LossMakingScanner() {
  // State to manage the selected province and selected store
  const [selectedProvince, setSelectedProvince] = useState<{
    name: string;
    value: number;
    geometry: any;
  } | null>(null);
  const [selectedStore, setSelectedStore] = useState<{
    name: string;
    value: number;
  } | null>(null);

  // When a province is clicked from ChinaMap
  const handleProvinceSelect = (province: {
    name: string;
    value: number;
    geometry: any;
  }) => {
    setSelectedProvince(province);
  };

  // When a store icon is clicked on the province map
  const handleStoreSelect = (store: { name: string; value: number }) => {
    setSelectedStore(store);
  };

  // Back button handlers
  const handleBackFromProvinceMap = () => {
    setSelectedProvince(null);
  };
  const handleBackFromStoreTable = () => {
    setSelectedStore(null);
  };

  // Calculate total loss making by province
  const totalLossMakingByProvince: Record<string, number> = Object.entries(
    storeLossMakingByProvince
  ).reduce((acc, [province, stores]) => {
    const totalLoss = stores.reduce((sum, store) => sum + store.value, 0);
    acc[province] = totalLoss;
    return acc;
  }, {} as Record<string, number>);

  // Calculate overall loss and SKU counts (for display in ChinaMap)
  const chinaOverallLossMaking = Object.values(
    totalLossMakingByProvince
  ).reduce((acc, value) => acc + value, 0);
  const chinaSKUCount = Object.keys(storeCoordinates).length * 10; // Assuming 10 stores per province

  // For a selected province, calculate the store count and total loss
  const provinceSKUCount = selectedProvince
    ? storeLossMakingByProvince[selectedProvince.name]?.filter((store) =>
        Object.keys(storeCoordinates).includes(store.name)
      ).length || 0
    : chinaSKUCount;
  const provinceTotalLoss = selectedProvince
    ? storeLossMakingByProvince[selectedProvince.name]?.reduce(
        (sum, store) => sum + store.value,
        0
      ) || 0
    : chinaOverallLossMaking;
  const provinceTotalLossInMillion = (provinceTotalLoss / 1e6).toFixed(2);

  return (
    <div className="text-cpg-black h-full flex flex-col">
      <PageHeader title="Loss Making Products Scanner" />
      <div className="flex-1 p-4 flex flex-col">
        {/* Only show summary info when no store is selected */}
        {!selectedStore && (
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl font-semibold text-cpg-error-500">
              {provinceSKUCount}
            </span>
            <span className="text-2xl font-medium text-cpg-error-500 mx-2">
              SKUs
            </span>
            <span className="text-6xl font-semibold text-cpg-error-500 mx-4">
              |
            </span>
            <span className="text-6xl font-semibold text-cpg-error-500">
              {provinceTotalLossInMillion}M
            </span>
            <span className="text-2xl font-medium text-cpg-error-500 mx-2">
              RMB
            </span>
          </div>
        )}
        <div className="flex-1">
          {selectedStore ? (
            // If a store is selected, show its products table
            <StoreProductsTable
              storeName={selectedStore.name}
              onBack={handleBackFromStoreTable}
            />
          ) : selectedProvince ? (
            // Otherwise, if a province is selected, show its map with store icons
            <ChinaProvinceMap
              province={selectedProvince}
              onBack={handleBackFromProvinceMap}
              onStoreSelect={handleStoreSelect}
            />
          ) : (
            // Otherwise, show the ChinaMap
            <ChinaMap
              onProvinceSelect={handleProvinceSelect}
              totalLossMakingByProvince={totalLossMakingByProvince}
            />
          )}
        </div>
      </div>
    </div>
  );
}
