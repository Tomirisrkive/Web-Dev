import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { Category } from './category.model';
import { ProductItemComponent } from './product-item/product-item.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class AppComponent {
  searchText: string = '';
  likedProducts: Product[] = [];
  categories: Category[] = [
    { id: 1, name: 'Смарт-часы' },
    { id: 2, name: 'Смартфоны' },
    { id: 3, name: 'Ноутбуки' },
    { id: 4, name: 'Наушники' }
  ];selectedCategoryId: number | null = null;
  products: Product[] = [
    {
      id: 1,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
      price: 139990,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 2,
      name: 'Смарт-часы Apple Watch Series 11 M/L 46 мм ',
      description: 'Apple Watch Series 11 — стильные и функциональные умные часы для активной жизни, сочетающие передовые технологии и элегантный дизайн.\n' +
        '\n',
      price: 217763,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pba/64468962.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 3,
      name: 'Смарт-часы Apple Watch Series 11 S/M 42 мм ',
      description: 'Apple Watch Series 11 — стильные и функциональные умные часы для тех, кто ценит инновации и удобство в повседневной жизни.',
      price: 192800,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p89/66311545.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc9/p89/66311544.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-s-m-42-mm-rozovoe-zoloto-rozovyi-146092607/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 4,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 44 мм ',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности',
      price: 123600,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7a/p43/6921158.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p96/p43/6921159.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-44-mm-chernyi-129607289/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 10 S/M 42 мм ',
      description: 'Apple Watch Series 10 предлагают еще больше возможностей: увеличенный экран, тонкий изящный и прочный корпус, быстрая зарядка и новые возможности.',
      price: 208995,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/paa/3346092.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-zolotistyi-belyi-128574070/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM  ',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 824000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 7,
      name: 'Apple iPhone 15 128Gb NanoSIM+eSIM  ',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн',
      price: 408000,
      rating: 4.7,
      likes: 0,
      isFavorite: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-3-2025-s-m-40-mm-bezhevyi-bezhevyi-146093687/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 8,
      name: 'Apple iPhone 17 Pro 256Gb NanoSIM+eSIM  ',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн',
      price: 837000,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p83/64167659.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p84/64167658.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 9,
      name: 'Apple iPhone 17 Pro 256Gb NanoSIM+eSIM  ',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии и безупречный дизайн',
      price: 843000,
      rating: 4.9,
      likes: 0,isFavorite: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p66/64464588.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p40/64168007.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-serebristyi-145467562/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 10,
      name: 'Apple iPhone 16 128Gb NanoSIM+eSIM  ',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше',
      price: 499000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 11,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123RU/A  ',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
      price: 603000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p3f/36846120.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p3f/36846125.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 12,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MC6T4RU/A  ',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и инновационные технологии',
      price: 615000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p93/37022732.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p94/37022737.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p94/37022738.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mc6t4ru-a-138203455/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 13,name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4RU/A  ',
      description: 'Представляем Apple MacBook Air 13 2022 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность',
      price: 458000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p35/16711031.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/p35/16711032.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p35/16711033.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 14,
      name: 'Ноутбук Apple MacBook Air 13 2025 13.6" / 16 Гб / SSD 256 Гб / macOS / MC6T4  ',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность',
      price: 523000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p94/37425234.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p97/37425242.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/p94/37425236.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mc6t4-138321653/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 15,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63  ',
      description: 'Маленький чип. Грандиозный прорыв',
      price: 390000,
      rating: 4.9,
      likes: 0,
      isFavorite: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 16,
      name: 'Наушники Apple AirPods 4  ',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 60995,
      rating: 4.7,
      likes: 0,
      isFavorite: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-large',
      ],link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 17,
      name: 'Наушники Apple AirPods Pro 2nd generation  ',
      description: 'Как и предыдущая версия, наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг',
      price: 109000,
      rating: 4.7,
      likes: 0,
      isFavorite: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/h7a/64511116378142.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/hce/64511118704670.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 18,
      name: 'Наушники Apple AirPods Pro  ',
      description: 'AirPods Pro — уникальные наушники с технологией активного шумоподавления, которые непрерывно оптимизируют звучание с учётом формы вашего уха и положения вкладышей',
      price: 111000,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7j5It1QVcHkigqiVnjzzY1Dt&gclid=CjwKCAiAnoXNBhAZEiwAnItcGxn3TfbM_oK-RqdDNzwJcTzmUbEoXBzkgmZPIodL32lza909owlznxoCx70QAvD_BwE'
    },
    {
      id: 19,
      name: 'Наушники Apple AirPods Pro with Magsafe Charging Case  ',
      description: 'Это наушники совершенно нового класса. AirPods Pro исключительно комфортны, в них реализована технология активного шумоподавления, и можно даже выбрать вкладыши своего размера',
      price: 122000,
      rating: 4.8,
      likes: 0,
      isFavorite: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/hcf/64136916566046.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h97/64136918827038.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h76/hb5/64136921219102.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/h26/64136923578398.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-with-magsafe-charging-case-belyi-102891649/?c=750000000'
    },
    {
      id: 20,
      name: 'Наушники Apple MFHP4ZE/A  ',
      description: 'AirPods Pro 3 с улучшенной акустической изоляцией автоматически адаптируются к вашим предпочтениям и окружающей обстановке',
      price: 214000,
      rating: 4.7,
      likes: 0,
      isFavorite: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pc0/92740176.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc0/92740178.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pc0/92740179.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-mfhp4ze-a-belyi-153910856/?c=750000000'
    },


  ];onLike(product: Product) {
  product.likes++;
}

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  addToFavorites(product: Product) {
    if (!this.likedProducts.find(p => p.id === product.id)) {
      this.likedProducts.push(product);
    }
  }

