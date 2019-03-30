import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navs: {
    icon: string;
    link: string;
    name: string;
    external?: boolean;
  }[];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.navs = [
      {
        icon: 'dashboard',
        link: '/',
        name: '多面板'
      },
      {
        icon: 'gavel',
        link: '/producers',
        name: '节点列表'
      },
      {
        icon: 'link',
        link: '/blocks',
        name: '区块列表'
      },
      {
        icon: 'list_alt',
        link: '/transactions',
        name: '交易列表'
      },
      {
        icon: 'how_to_vote',
        link: '/contracts',
        name: '智能合约'
      },
      {
        icon: 'account_balance_wallet',
        link: '/transactions',
        name: '钱包'
      },
      {
        icon: 'business',
        link: '/producers',
        name: '节点'
      },
      {
        icon: 'directions_bus',
        link: '/apply',
        name: '各种应用'
      },
      {
        icon: 'view_module',
        link: '/market',
        name: '区块链商城'
      },
      {
        icon: 'settings',
        link: '/settings',
        name: '设置'
      }
    ];
  }

}
