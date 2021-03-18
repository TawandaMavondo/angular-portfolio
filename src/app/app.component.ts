import { Component, OnInit } from '@angular/core';
import { QueryPostsGQL, QueryPostsQuery } from './services/wordpressGraphQl.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCollapsed = false;

  constructor(private postsService: QueryPostsGQL) { }

  public posts$: any;
  ngOnInit(): void {
    this.posts$ = this.postsService.fetch().pipe(
      map(
        res => res.data.posts?.nodes
      ));
    // console.log(this.posts$)
    console.log('init');
  }
  log(post): void {
    console.log(post);
  }


  public content:string =`<p>Shaping bargain jeans ready made fashioning extraordinary apparel valuable looked pumps. Braiding shading sleeveless. Accessory halter sewing stitching independant conformity photography bold textile.</p>\n<p>Shade attractive quantity leotard signature enhance conformity phenomenon illustration contemporary synthetic. Clothes shade hair replicate posture tailor brand petticoat craftmanship swag handbag jacket jeans trade.</p>\n<p>Sewing cheap clothes outfit glossy. Showcase apparel bargain swim-wear clothing adjustment pumps expensive. Leotard hair creative catwalk xl measurement luxurious artificial tailor pret-a-porter radical halter. Zipper affection proportion allure expirement revealing swim-wear shade bodice make up model motif wholesale. Wholesale conformity runway braiding model expirement tailor halter innovation mainstream glitter clothing stock.</p>\n<p>Consumer halter xl expensive adjustment conservative condition luxurious classic pret-a-porter jersey artistic revealing. Price expensive shawl. Inspiration popular petticoat measurement clothes xl prediction value artistry imprint hand-made affection apparel conservative. Couture etiquette outlet clothes jewelry leotard unique identity high heels clothing allure value glossy. Classic skirt petticoat. Collection jacket inspiration. Collection retailer couture stitching etiquette. Haute-couture one-of-a-kind necessity hanger pattern jumper imprint. Minimalist commercial accessory one-of-a-kind posture high heels glitter jeans catwalk. Easy radical swag.</p>\n<p>Cheap wardrobe proportion pret-a-porter clothes hippie buttons motif tones urban pattern. Apron comfortable mainstream waistline pumps. Extraordinary quantity availability halter. Stock zipper couture sewing sleeveless instagram cheap shawl sari. Artificial inexpensive jersey halter condition trademark ribbon zipper elegant catwalk sportswear bodice casual. Breathable sewing clothing impeccable skirt affection. Petticoat stitching model breathable pastel clothing posture leotard shape jacket glossy old-fashioned beautiful. Inspiration measurement shawl garment expirement sari outfit quality independant mannequin. Jersey halter synthetic edge. Bodice vintage jersey item expensive unique hippie artistic shape tailor instagram.</p>\n<p>Apron classic production look xl clothing inspiration hanger bold instagram xs runway. Pastel label measurement sleeveless petticoat artistry. Clothes stock signature look consumer imprint. Conformity synthetic pret-a-porter illustration trendwatching young hand-made effect artistic inspiration xs. Signature unique artistic label hand-made shawl production shape skirt artistry. Apparel enhance trademark clothes modern unique embroidery quantity inexpensive quality skirt. Emphasis vogue imagination glitter minimalist stitching bodice adjustment limited. Accessory catwalk trade jersey color mannequin artistic stock trend xs. Accessory skirt conformity clothing impeccable mainstream glitter pastel. Bold mode unique imprint artistic measurement replicate trendwatching inspiration bows.</p>\n<p>Independant inspiration extraordinary pumps hippie. Stitching runway cheap radical shawl couture. Original runway posture modification etiquette purse tailored unique buttons one-of-a-kind clothes shape ribbon braiding. Beautiful sewing wardrobe. Young innovation sewing one-of-a-kind buttons condition measurement tailor mannequin bold artistic effect artistry lingerie. Minimalist young pumps contemporary old-fashioned Haute-couture. Attractive signature measurement sewing emphasis xs production pastel manufacture valuable skirt look fashion. Modification trademark innovation jeans adjustment. Sewing trend urban radical. Instagram radical quality collection combination pastel elegant innovation swag minimalist illustration creative.</p>\n\n\n<figure class=\"wp-block-image size-thumbnail is-resized is-style-rounded\"><img loading=\"lazy\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG-150x150.jpg\" alt=\"\" class=\"wp-image-12065\" width=\"113\" height=\"113\"/><figcaption>Blond woman having a cup osaf coffee</figcaption></figure>\n\n\n\n<div class=\"wp-block-columns\">\n<div class=\"wp-block-column\" style=\"flex-basis:100%\">\n<figure class=\"wp-block-gallery columns-3 is-cropped\"><ul class=\"blocks-gallery-grid\"><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"616\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3-1024x616.jpg\" alt=\"\" data-id=\"12067\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3.jpg\" data-link=\"http://localhost:8888/wordpress/night-colors/woman-shaking-hands-with-business-partner/\" class=\"wp-image-12067\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3-1024x616.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3-300x180.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3-768x462.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG3.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Woman shaking hands with business partner</figcaption></figure></li><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"778\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4-1024x778.jpg\" alt=\"\" data-id=\"12068\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4.jpg\" data-link=\"http://localhost:8888/wordpress/night-colors/woman-using-digital-devices-at-a-cafe/\" class=\"wp-image-12068\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4-1024x778.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4-300x228.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4-768x584.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG4.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Woman using digital devices at a cafe</figcaption></figure></li><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"682\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2-1024x682.jpg\" alt=\"\" data-id=\"12066\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2.jpg\" data-link=\"http://localhost:8888/wordpress/night-colors/business-people-shaking-hands-in-agreement/\" class=\"wp-image-12066\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG2.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Business people shaking hands in agreement</figcaption></figure></li><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"682\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG-1024x682.jpg\" alt=\"\" data-id=\"12065\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG.jpg\" data-link=\"http://localhost:8888/wordpress/night-colors/blond-woman-having-a-cup-of-coffee/\" class=\"wp-image-12065\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Blond woman having a cup of coffee</figcaption></figure></li><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"682\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6-1024x682.jpg\" alt=\"\" data-id=\"12061\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6.jpg\" data-link=\"http://localhost:8888/wordpress/home/friends-enjoying-a-hot-coffee-together/\" class=\"wp-image-12061\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6-1536x1023.jpg 1536w, http://localhost:8888/wordpress/wp-content/uploads/2019/02/landerBG6.jpg 1600w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Friends enjoying a hot coffee together</figcaption></figure></li><li class=\"blocks-gallery-item\"><figure><img loading=\"lazy\" width=\"1024\" height=\"682\" src=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5-1024x682.jpg\" alt=\"\" data-id=\"12069\" data-full-url=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5.jpg\" data-link=\"http://localhost:8888/wordpress/night-colors/man-checking/\" class=\"wp-image-12069\" srcset=\"http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2018/01/lander-postBG5.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"blocks-gallery-item__caption\">Man checking</figcaption></figure></li></ul></figure>\n</div>\n</div>\n`;
}
