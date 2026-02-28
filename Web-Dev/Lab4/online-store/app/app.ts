import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  searchText: string = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
      price: 139990,
      rating: 4.9,
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
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/paa/3346092.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-zolotistyi-belyi-128574070/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 6,
      name: 'Смарт-часы Apple Watch SE 2 Gen (2022) 40 мм  ',
      description: 'Смарт-часы Apple Watch SE 2 Gen 2022 оснащены гибким силиконовым ремешком и квадратным сенсорным дисплеем с технологией OLED',
      price: 350000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/hc5/64534206382110.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 7,
      name: 'Смарт-часы Apple Watch SE GPS Gen 3 2025 S/M 40 мм  ',
      description: 'Apple Watch SE GPS Gen 3 — стильные и функциональные умные часы для активной жизни, сочетающие передовые технологии и удобный интерфейс',
      price: 146700,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/p33/66314384.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p33/66314386.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-3-2025-s-m-40-mm-bezhevyi-bezhevyi-146093687/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 8,
      name: 'Смарт-часы Apple Watch Series 11 S/M 42 мм  ',
      description: 'Apple Watch Series 11 — стильные и функциональные умные часы для тех, кто ценит инновации и активный образ жизни.',
      price: 205500,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p29/66311921.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p29/66311920.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-s-m-42-mm-serebristyi-fioletovyi-146092742/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 9,
      name: 'Смарт-часы Apple Watch Series 10 M/L 42 мм  ',
      description: 'Apple Watch Series 10 предлагают еще больше возможностей: увеличенный экран, тонкий изящный и прочный корпус, быстрая зарядка и новые возможности.',
      price: 241450,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/pd6/3340162.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pd6/3340163.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-m-l-42-mm-chernyi-128572524/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },
    {
      id: 10,
      name: 'Смарт-часы Apple Watch Ultra Series 2 GPS + 5G Trail Loop M/L 49 мм  ',
      description: 'Apple Watch Ultra Series 2 GPS + 5G — надежный компаньон для активной жизни и постоянной связи, сочетающий передовые технологии и премиальный дизайн.',
      price: 492990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h3c/84060380332062.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/he1/84060380397598.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-5g-trail-loop-m-l-49-mm-seryi-seryi-113576323/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_fishing_equipment_bait_for_fishing&gbraid=0AAAAAC7-v7h5NqYKhoaYzl2MItKx-pprB&gclid=CjwKCAiA-__MBhAKEiwASBmsBM2FpYZJ6toj6Ezem7bA2ZEy_YYKACNu0UqWCeedowJPOpzhW6Uy4BoCIuAQAvD_BwE'
    },

  ];
  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  share(link: string) {
    const message = encodeURIComponent(`Посмотри на этот товар: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text=${message}`, '_blank');
  }

  encode(url: string) {
    return encodeURIComponent(url);
  }
}
