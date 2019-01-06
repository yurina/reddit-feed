import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './entry.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      { 'id': 1,
        'selftext':'Efter ett \u00e5r kantat av tropisk sommar, regeringskris, ett inte helt v\u00e4rdel\u00f6st Fotbolls-VM, och tills\u00e4ttningen av nya, snygga mods, \u00e4r det \u00c4NTLIGEN dags f\u00f6r \n\n#**&gt; Best of Sweddit 2018!!**\n\nI \u00e5r har vi 15 kategorier, och 15 Platinummynt som ska ges ut. Det \u00e4r d\u00e4rf\u00f6r viktigt att i din nominering l\u00e4nka till den post/kommentar/anv\u00e4ndare du refererar till. Och g\u00e4rna skriva en liten nomineringstext om du vill f\u00e5 andra att r\u00f6sta p\u00e5 samma som du. Om du vill nominera n\u00e5gon som redan \u00e4r nominerad, r\u00f6sta upp den nomineringen ist\u00e4llet f\u00f6r att g\u00f6ra din egen nominering.\n\n\n\u00c5rets 15 kategorier \u00e4r :\n\n___ \n\n######\n\n* **\u00c5rets  l\u00e4nkpost**|\n---\n* **\u00c5rets ordvits**|\n* **\u00c5rets meme**|\n* **\u00c5rets Groda** * (OC)|\n* **\u00c5rets self-post utan [seri\u00f6s] tag**|\n* **\u00c5rets self-post med [seri\u00f6s] tag**|\n* **\u00c5rets skitpost**|\n* **\u00c5rets roligaste kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande post**|\n* **\u00c5rets Sweddit\u00f6r** (Kommer vonadler ta tillbaka titeln?)|\n* **\u00c5rets Discordanv\u00e4ndare** (allts\u00e5 den anv\u00e4ndare p\u00e5 v\u00e5ran egna discord ni tycker har varit sk\u00f6nast, b\u00e4st, roligast, w/e. Man kan joina [h\u00e4r](https://discordapp.com/invite/sweden) ) |\n* **\u00c5rets WTF?**|\n* **\u00c5rets fotografi** * (OC)|\n* **\u00c5rets Wildcard** (h\u00e4r kan du nominera n\u00e5gon eller n\u00e5got som inte platsar i de andra kategorierna, men som borde lyftas fram)|\n\n___\n\n##**F\u00f6r att nominera svarar ni helt enkelt p\u00e5 passande kategori h\u00e4r under, med en l\u00e4nk och eventuellt en passande beskrivning.**\n\n\nOch f\u00f6r att r\u00f6sta, r\u00f6star ni helt enkelt upp kommentaren som n\u00e4mner den nominerade ni vill r\u00f6sta p\u00e5.\n\n&lt;&lt;plats reserverad f\u00f6r l\u00e4nkar till andra svenska subreddits som k\u00f6r best-of i \u00e5r&gt;&gt;\n',
        'author':'t2_e5fl2',
        'created':'2018-12-31',
        'title':'First Mock title',
        'score':0,
        'permalink':'',
        'thumbnail':'',
        'num_comments': 10,
      },
      { 'id': 2,
        'selftext':'Efter ett \u00e5r kantat av tropisk sommar, regeringskris, ett inte helt v\u00e4rdel\u00f6st Fotbolls-VM, och tills\u00e4ttningen av nya, snygga mods, \u00e4r det \u00c4NTLIGEN dags f\u00f6r \n\n#**&gt; Best of Sweddit 2018!!**\n\nI \u00e5r har vi 15 kategorier, och 15 Platinummynt som ska ges ut. Det \u00e4r d\u00e4rf\u00f6r viktigt att i din nominering l\u00e4nka till den post/kommentar/anv\u00e4ndare du refererar till. Och g\u00e4rna skriva en liten nomineringstext om du vill f\u00e5 andra att r\u00f6sta p\u00e5 samma som du. Om du vill nominera n\u00e5gon som redan \u00e4r nominerad, r\u00f6sta upp den nomineringen ist\u00e4llet f\u00f6r att g\u00f6ra din egen nominering.\n\n\n\u00c5rets 15 kategorier \u00e4r :\n\n___ \n\n######\n\n* **\u00c5rets  l\u00e4nkpost**|\n---\n* **\u00c5rets ordvits**|\n* **\u00c5rets meme**|\n* **\u00c5rets Groda** * (OC)|\n* **\u00c5rets self-post utan [seri\u00f6s] tag**|\n* **\u00c5rets self-post med [seri\u00f6s] tag**|\n* **\u00c5rets skitpost**|\n* **\u00c5rets roligaste kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande post**|\n* **\u00c5rets Sweddit\u00f6r** (Kommer vonadler ta tillbaka titeln?)|\n* **\u00c5rets Discordanv\u00e4ndare** (allts\u00e5 den anv\u00e4ndare p\u00e5 v\u00e5ran egna discord ni tycker har varit sk\u00f6nast, b\u00e4st, roligast, w/e. Man kan joina [h\u00e4r](https://discordapp.com/invite/sweden) ) |\n* **\u00c5rets WTF?**|\n* **\u00c5rets fotografi** * (OC)|\n* **\u00c5rets Wildcard** (h\u00e4r kan du nominera n\u00e5gon eller n\u00e5got som inte platsar i de andra kategorierna, men som borde lyftas fram)|\n\n___\n\n##**F\u00f6r att nominera svarar ni helt enkelt p\u00e5 passande kategori h\u00e4r under, med en l\u00e4nk och eventuellt en passande beskrivning.**\n\n\nOch f\u00f6r att r\u00f6sta, r\u00f6star ni helt enkelt upp kommentaren som n\u00e4mner den nominerade ni vill r\u00f6sta p\u00e5.\n\n&lt;&lt;plats reserverad f\u00f6r l\u00e4nkar till andra svenska subreddits som k\u00f6r best-of i \u00e5r&gt;&gt;\n',
        'author':'t2_e5fl2',
        'created':'2018-12-20',
        'title':'Second Mock title',
        'score':0,
        'permalink':'',
        'thumbnail':'',
        'num_comments': 10,
      },
      { 'id': 3,
        'selftext':'Efter ett \u00e5r kantat av tropisk sommar, regeringskris, ett inte helt v\u00e4rdel\u00f6st Fotbolls-VM, och tills\u00e4ttningen av nya, snygga mods, \u00e4r det \u00c4NTLIGEN dags f\u00f6r \n\n#**&gt; Best of Sweddit 2018!!**\n\nI \u00e5r har vi 15 kategorier, och 15 Platinummynt som ska ges ut. Det \u00e4r d\u00e4rf\u00f6r viktigt att i din nominering l\u00e4nka till den post/kommentar/anv\u00e4ndare du refererar till. Och g\u00e4rna skriva en liten nomineringstext om du vill f\u00e5 andra att r\u00f6sta p\u00e5 samma som du. Om du vill nominera n\u00e5gon som redan \u00e4r nominerad, r\u00f6sta upp den nomineringen ist\u00e4llet f\u00f6r att g\u00f6ra din egen nominering.\n\n\n\u00c5rets 15 kategorier \u00e4r :\n\n___ \n\n######\n\n* **\u00c5rets  l\u00e4nkpost**|\n---\n* **\u00c5rets ordvits**|\n* **\u00c5rets meme**|\n* **\u00c5rets Groda** * (OC)|\n* **\u00c5rets self-post utan [seri\u00f6s] tag**|\n* **\u00c5rets self-post med [seri\u00f6s] tag**|\n* **\u00c5rets skitpost**|\n* **\u00c5rets roligaste kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande kommentar**|\n* **\u00c5rets mest konstruktiva/informativa/f\u00f6rklarande post**|\n* **\u00c5rets Sweddit\u00f6r** (Kommer vonadler ta tillbaka titeln?)|\n* **\u00c5rets Discordanv\u00e4ndare** (allts\u00e5 den anv\u00e4ndare p\u00e5 v\u00e5ran egna discord ni tycker har varit sk\u00f6nast, b\u00e4st, roligast, w/e. Man kan joina [h\u00e4r](https://discordapp.com/invite/sweden) ) |\n* **\u00c5rets WTF?**|\n* **\u00c5rets fotografi** * (OC)|\n* **\u00c5rets Wildcard** (h\u00e4r kan du nominera n\u00e5gon eller n\u00e5got som inte platsar i de andra kategorierna, men som borde lyftas fram)|\n\n___\n\n##**F\u00f6r att nominera svarar ni helt enkelt p\u00e5 passande kategori h\u00e4r under, med en l\u00e4nk och eventuellt en passande beskrivning.**\n\n\nOch f\u00f6r att r\u00f6sta, r\u00f6star ni helt enkelt upp kommentaren som n\u00e4mner den nominerade ni vill r\u00f6sta p\u00e5.\n\n&lt;&lt;plats reserverad f\u00f6r l\u00e4nkar till andra svenska subreddits som k\u00f6r best-of i \u00e5r&gt;&gt;\n',
        'author':'t2_e5fl2',
        'created':'2018-12-23',
        'title':'Third Mock title',
        'score':0,
        'permalink':'',
        'thumbnail':'',
        'num_comments': 10,
      },
    ];

    return {entries};
  }

  // genId(entries: Entry[]): number {
  //   return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 11;
  // }
}
