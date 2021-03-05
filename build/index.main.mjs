// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Observer(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v2 = await ctc.creationTime();
  const v0 = stdlib.protect(stdlib.T_UInt, interact.moveLimit, null);
  const v1 = stdlib.protect(stdlib.T_UInt, interact.payoutPerDuration, null);
  const v5 = stdlib.gt(v0, stdlib.checkedBigNumberify('./index.rsh:113:35:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v5, {
    at: './index.rsh:113:13:application',
    fs: ['at ./index.rsh:108:18:application call to [unknown function] (defined at: ./index.rsh:108:22:function exp)'],
    msg: null,
    who: 'Observer'
     });
  const txn1 = await (ctc.sendrecv('Observer', 1, 2, stdlib.checkedBigNumberify('./index.rsh:116:14:dot', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v2, v1, v0], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [stdlib.T_UInt, stdlib.T_UInt], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:14:dot', stdlib.UInt_max, 0), v2]);
    sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:116:14:dot', stdlib.UInt_max, 0)]);
    const [v7, v8] = txn1.data;
    const v9 = txn1.value;
    const v13 = txn1.time;
    const v6 = txn1.from;
    
    const v10 = stdlib.eq(v9, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v10, {
      at: './index.rsh:116:14:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Observer'
       });
    stdlib.assert(true, {
      at: './index.rsh:116:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Observer'
       });
    const v12 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v9);
    const v14 = stdlib.gt(v8, stdlib.checkedBigNumberify('./index.rsh:117:25:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v14, {
      at: './index.rsh:117:12:application',
      fs: [],
      msg: null,
      who: 'Observer'
       });
    const v16 = stdlib.checkedBigNumberify('./index.rsh:122:24:decimal', stdlib.UInt_max, 0);
    const v17 = stdlib.checkedBigNumberify('./index.rsh:122:27:decimal', stdlib.UInt_max, 0);
    const v139 = v12;
    const v140 = v13;
    const v141 = v2;
    
    if ((() => {
      const v20 = stdlib.lt(v16, v8);
      
      return v20; })()) {
      let v21;
      sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
      sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
      sim_r.isHalt = false;
       }
    else {
      sim_r.txns.push({
        amt: v139,
        to: v6
         });
      sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
      sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
      sim_r.isHalt = true;
       }
    return sim_r;
     })));
  const [v7, v8] = txn1.data;
  const v9 = txn1.value;
  const v13 = txn1.time;
  const v6 = txn1.from;
  const v10 = stdlib.eq(v9, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v10, {
    at: './index.rsh:116:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Observer'
     });
  stdlib.assert(true, {
    at: './index.rsh:116:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Observer'
     });
  const v12 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v9);
  const v14 = stdlib.gt(v8, stdlib.checkedBigNumberify('./index.rsh:117:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v14, {
    at: './index.rsh:117:12:application',
    fs: [],
    msg: null,
    who: 'Observer'
     });
  let v16 = stdlib.checkedBigNumberify('./index.rsh:122:24:decimal', stdlib.UInt_max, 0);
  let v17 = stdlib.checkedBigNumberify('./index.rsh:122:27:decimal', stdlib.UInt_max, 0);
  let v139 = v12;
  let v140 = v13;
  let v141 = v2;
  
  while ((() => {
    const v20 = stdlib.lt(v16, v8);
    
    return v20; })()) {
    let v21;
    const txn2 = await (ctc.recv('Observer', 4, 1, [stdlib.T_Data({
      Player: stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Bool, stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32))])
       })], false, stdlib.checkedBigNumberify('./index.rsh:85:23:decimal', stdlib.UInt_max, 30)));
    if (txn2.didTimeout) {
      stdlib.protect(stdlib.T_Null, await interact.observeTimeout(), {
        at: './index.rsh:154:54:application',
        fs: ['at ./index.rsh:154:24:application call to [unknown function] (defined at: ./index.rsh:154:28:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'observeTimeout',
        who: 'Observer'
         });
      const txn3 = await (ctc.sendrecv('Observer', 5, 0, stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 5), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v6, v8, v16, v17, v139, v140], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
        sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:155:20:dot', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
        const [] = txn3.data;
        const v118 = txn3.value;
        const v123 = txn3.time;
        const v117 = txn3.from;
        
        const v119 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v119, {
          at: './index.rsh:155:20:dot',
          fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
          msg: 'pay amount correct',
          who: 'Observer'
           });
        const v120 = stdlib.addressEq(v6, v117);
        stdlib.assert(v120, {
          at: './index.rsh:155:20:dot',
          fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
          msg: 'sender correct',
          who: 'Observer'
           });
        const v122 = stdlib.add(v139, v118);
        const v127 = [v16, v17];
        v21 = v127;
        const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
        const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
        const cv16 = v128;
        const cv17 = v129;
        const cv139 = v122;
        const cv140 = v123;
        const cv141 = v140;
        
        (() => {
          const v16 = cv16;
          const v17 = cv17;
          const v139 = cv139;
          const v140 = cv140;
          const v141 = cv141;
          
          if ((() => {
            const v20 = stdlib.lt(v16, v8);
            
            return v20; })()) {
            let v21;
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
            sim_r.isHalt = false;
             }
          else {
            sim_r.txns.push({
              amt: v139,
              to: v6
               });
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
            sim_r.isHalt = true;
             } })();
        return sim_r;
         })));
      const [] = txn3.data;
      const v118 = txn3.value;
      const v123 = txn3.time;
      const v117 = txn3.from;
      const v119 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v119, {
        at: './index.rsh:155:20:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'pay amount correct',
        who: 'Observer'
         });
      const v120 = stdlib.addressEq(v6, v117);
      stdlib.assert(v120, {
        at: './index.rsh:155:20:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'sender correct',
        who: 'Observer'
         });
      const v122 = stdlib.add(v139, v118);
      const v127 = [v16, v17];
      v21 = v127;
      const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
      const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
      const cv16 = v128;
      const cv17 = v129;
      const cv139 = v122;
      const cv140 = v123;
      const cv141 = v140;
      
      v16 = cv16;
      v17 = cv17;
      v139 = cv139;
      v140 = cv140;
      v141 = cv141;
      
      continue;
       }
    else {
      const [v61] = txn2.data;
      const v62 = txn2.value;
      const v76 = txn2.time;
      const v60 = txn2.from;
      let v63;
      switch (v61[0]) {
        case 'Player': {
          const v64 = v61[1];
          v63 = stdlib.checkedBigNumberify('./index.rsh:135:34:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v73 = stdlib.eq(v62, v63);
      stdlib.assert(v73, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'pay amount correct',
        who: 'Observer'
         });
      stdlib.assert(true, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'sender correct',
        who: 'Observer'
         });
      const v75 = stdlib.add(v139, v62);
      let v77;
      switch (v61[0]) {
        case 'Player': {
          const v78 = v61[1];
          v77 = true;
          
          break;
           }
         }
      stdlib.assert(v77, {
        at: './index.rsh:122:22:application',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: null,
        who: 'Observer'
         });
      switch (v61[0]) {
        case 'Player': {
          const v82 = v61[1];
          const v83 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 0)];
          const v84 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 1)];
          const v85 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 2)];
          const v86 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 3)];
          const v87 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 4)];
          if (v86) {
            stdlib.protect(stdlib.T_Null, await interact.observeMove(v83, v84, v85, v87), {
              at: './index.rsh:140:37:application',
              fs: ['at ./index.rsh:139:28:application call to [unknown function] (defined at: ./index.rsh:139:32:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'observeMove',
              who: 'Observer'
               });
            const txn3 = await (ctc.sendrecv('Observer', 6, 0, stdlib.checkedBigNumberify('./index.rsh:142:24:dot', stdlib.UInt_max, 5), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v6, v8, v16, v17, v75, v76, v85], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:142:24:dot', stdlib.UInt_max, 4), v6, v8, v16, v17, v75, v76, v85]);
              sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:142:24:dot', stdlib.UInt_max, 4), v6, v8, v16, v17, v75, v85]);
              const [] = txn3.data;
              const v91 = txn3.value;
              const v96 = txn3.time;
              const v90 = txn3.from;
              
              const v92 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v92, {
                at: './index.rsh:142:24:dot',
                fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
                msg: 'pay amount correct',
                who: 'Observer'
                 });
              const v93 = stdlib.addressEq(v6, v90);
              stdlib.assert(v93, {
                at: './index.rsh:142:24:dot',
                fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
                msg: 'sender correct',
                who: 'Observer'
                 });
              const v95 = stdlib.add(v75, v91);
              sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:144:23:after expr stmt semicolon', stdlib.UInt_max, 6), v6, v8, v16, v17, v85, v95, v96]);
              sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:144:23:after expr stmt semicolon', stdlib.UInt_max, 6), v6, v8, v16, v17, v85, v95]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            const [] = txn3.data;
            const v91 = txn3.value;
            const v96 = txn3.time;
            const v90 = txn3.from;
            const v92 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v92, {
              at: './index.rsh:142:24:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'pay amount correct',
              who: 'Observer'
               });
            const v93 = stdlib.addressEq(v6, v90);
            stdlib.assert(v93, {
              at: './index.rsh:142:24:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'sender correct',
              who: 'Observer'
               });
            const v95 = stdlib.add(v75, v91);
            const txn4 = await (ctc.recv('Observer', 7, 0, [], false, false));
            const [] = txn4.data;
            const v101 = txn4.value;
            const v105 = txn4.time;
            const v100 = txn4.from;
            const v102 = stdlib.eq(v101, v85);
            stdlib.assert(v102, {
              at: './index.rsh:146:22:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'pay amount correct',
              who: 'Observer'
               });
            stdlib.assert(true, {
              at: './index.rsh:146:22:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'sender correct',
              who: 'Observer'
               });
            const v104 = stdlib.add(v95, v101);
            const v107 = stdlib.add(v16, stdlib.checkedBigNumberify('./index.rsh:147:39:decimal', stdlib.UInt_max, 1));
            const v110 = stdlib.add(v17, v85);
            const v125 = [v107, v110];
            v21 = v125;
            const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
            const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
            const cv16 = v128;
            const cv17 = v129;
            const cv139 = v104;
            const cv140 = v105;
            const cv141 = v96;
            
            v16 = cv16;
            v17 = cv17;
            v139 = cv139;
            v140 = cv140;
            v141 = cv141;
            
            continue;
            
             }
          else {
            const v126 = [v16, v17];
            v21 = v126;
            const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
            const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
            const cv16 = v128;
            const cv17 = v129;
            const cv139 = v75;
            const cv140 = v76;
            const cv141 = v140;
            
            v16 = cv16;
            v17 = cv17;
            v139 = cv139;
            v140 = cv140;
            v141 = cv141;
            
            continue; }
          break;
           }
         } }
     }
  ;
  stdlib.protect(stdlib.T_Null, await interact.observeGameFinish(), {
    at: './index.rsh:166:33:application',
    fs: ['at ./index.rsh:165:18:application call to [unknown function] (defined at: ./index.rsh:165:22:function exp)'],
    msg: 'observeGameFinish',
    who: 'Observer'
     });
  return;
  
   }
export async function Player(ctc, interact) {
  const stdlib = ctc.stdlib;
  
  const v2 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Player', 1, 2, [stdlib.T_UInt, stdlib.T_UInt], false, false));
  const [v7, v8] = txn1.data;
  const v9 = txn1.value;
  const v13 = txn1.time;
  const v6 = txn1.from;
  const v10 = stdlib.eq(v9, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v10, {
    at: './index.rsh:116:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Player'
     });
  stdlib.assert(true, {
    at: './index.rsh:116:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
     });
  const v12 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v9);
  const v14 = stdlib.gt(v8, stdlib.checkedBigNumberify('./index.rsh:117:25:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v14, {
    at: './index.rsh:117:12:application',
    fs: [],
    msg: null,
    who: 'Player'
     });
  let v16 = stdlib.checkedBigNumberify('./index.rsh:122:24:decimal', stdlib.UInt_max, 0);
  let v17 = stdlib.checkedBigNumberify('./index.rsh:122:27:decimal', stdlib.UInt_max, 0);
  let v139 = v12;
  let v140 = v13;
  let v141 = v2;
  
  while ((() => {
    const v20 = stdlib.lt(v16, v8);
    
    return v20; })()) {
    let v21;
    const v42 = stdlib.protect(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32))]), await interact.getMove(), {
      at: './index.rsh:127:63:application',
      fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:126:15:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
      msg: 'getMove',
      who: 'Player'
       });
    const v43 = v42[stdlib.checkedBigNumberify('./index.rsh:127:19:array', stdlib.UInt_max, 0)];
    const v44 = v42[stdlib.checkedBigNumberify('./index.rsh:127:19:array', stdlib.UInt_max, 1)];
    const v45 = v42[stdlib.checkedBigNumberify('./index.rsh:127:19:array', stdlib.UInt_max, 2)];
    const v46 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, 0));
    const v47 = stdlib.gt(v44, stdlib.checkedBigNumberify('./index.rsh:128:45:decimal', stdlib.UInt_max, 0));
    const v48 = v46 ? v47 : false;
    stdlib.assert(v48, {
      at: './index.rsh:128:19:application',
      fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:126:15:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
      msg: '[ERROR] Invalid Move',
      who: 'Player'
       });
    const v49 = stdlib.protect(stdlib.T_Bool, await interact.acceptMove(v7), {
      at: './index.rsh:130:60:application',
      fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:126:15:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)', 'at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
      msg: 'acceptMove',
      who: 'Player'
       });
    const v51 = stdlib.mul(v44, v7);
    const v54 = [v43, v44, v51, v49, v45];
    const v55 = ['Player', v54];
    const txn2 = await (ctc.sendrecv('Player', 4, 1, stdlib.checkedBigNumberify('./index.rsh:122:22:dot', stdlib.UInt_max, 5), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Data({
      Player: stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Bool, stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32))])
       })], [v6, v8, v16, v17, v139, v140, v55], stdlib.checkedBigNumberify('./index.rsh:135:34:decimal', stdlib.UInt_max, 0), [stdlib.T_Data({
      Player: stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_Bool, stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32))])
       })], true, false, stdlib.checkedBigNumberify('./index.rsh:85:23:decimal', stdlib.UInt_max, 30), ((txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:dot', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
      sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:dot', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
      const [v61] = txn2.data;
      const v62 = txn2.value;
      const v76 = txn2.time;
      const v60 = txn2.from;
      
      let v63;
      switch (v61[0]) {
        case 'Player': {
          const v64 = v61[1];
          v63 = stdlib.checkedBigNumberify('./index.rsh:135:34:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v73 = stdlib.eq(v62, v63);
      stdlib.assert(v73, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'sender correct',
        who: 'Player'
         });
      const v75 = stdlib.add(v139, v62);
      let v77;
      switch (v61[0]) {
        case 'Player': {
          const v78 = v61[1];
          v77 = true;
          
          break;
           }
         }
      stdlib.assert(v77, {
        at: './index.rsh:122:22:application',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: null,
        who: 'Player'
         });
      switch (v61[0]) {
        case 'Player': {
          const v82 = v61[1];
          const v83 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 0)];
          const v84 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 1)];
          const v85 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 2)];
          const v86 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 3)];
          const v87 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 4)];
          if (v86) {
            sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:138:23:after expr stmt semicolon', stdlib.UInt_max, 4), v6, v8, v16, v17, v75, v76, v85]);
            sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:138:23:after expr stmt semicolon', stdlib.UInt_max, 4), v6, v8, v16, v17, v75, v85]);
            sim_r.isHalt = false;
             }
          else {
            const v126 = [v16, v17];
            v21 = v126;
            const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
            const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
            const cv16 = v128;
            const cv17 = v129;
            const cv139 = v75;
            const cv140 = v76;
            const cv141 = v140;
            
            (() => {
              const v16 = cv16;
              const v17 = cv17;
              const v139 = cv139;
              const v140 = cv140;
              const v141 = cv141;
              
              if ((() => {
                const v20 = stdlib.lt(v16, v8);
                
                return v20; })()) {
                let v21;
                sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
                sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
                sim_r.isHalt = false;
                 }
              else {
                sim_r.txns.push({
                  amt: v139,
                  to: v6
                   });
                sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
                sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
                sim_r.isHalt = true;
                 } })(); }
          break;
           }
         }
      return sim_r;
       })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv('Player', 5, 0, [], false, false));
      const [] = txn3.data;
      const v118 = txn3.value;
      const v123 = txn3.time;
      const v117 = txn3.from;
      const v119 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v119, {
        at: './index.rsh:155:20:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'pay amount correct',
        who: 'Player'
         });
      const v120 = stdlib.addressEq(v6, v117);
      stdlib.assert(v120, {
        at: './index.rsh:155:20:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'sender correct',
        who: 'Player'
         });
      const v122 = stdlib.add(v139, v118);
      const v127 = [v16, v17];
      v21 = v127;
      const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
      const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
      const cv16 = v128;
      const cv17 = v129;
      const cv139 = v122;
      const cv140 = v123;
      const cv141 = v140;
      
      v16 = cv16;
      v17 = cv17;
      v139 = cv139;
      v140 = cv140;
      v141 = cv141;
      
      continue;
       }
    else {
      const [v61] = txn2.data;
      const v62 = txn2.value;
      const v76 = txn2.time;
      const v60 = txn2.from;
      let v63;
      switch (v61[0]) {
        case 'Player': {
          const v64 = v61[1];
          v63 = stdlib.checkedBigNumberify('./index.rsh:135:34:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v73 = stdlib.eq(v62, v63);
      stdlib.assert(v73, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'pay amount correct',
        who: 'Player'
         });
      stdlib.assert(true, {
        at: './index.rsh:122:22:dot',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: 'sender correct',
        who: 'Player'
         });
      const v75 = stdlib.add(v139, v62);
      let v77;
      switch (v61[0]) {
        case 'Player': {
          const v78 = v61[1];
          v77 = true;
          
          break;
           }
         }
      stdlib.assert(v77, {
        at: './index.rsh:122:22:application',
        fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
        msg: null,
        who: 'Player'
         });
      switch (v61[0]) {
        case 'Player': {
          const v82 = v61[1];
          const v83 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 0)];
          const v84 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 1)];
          const v85 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 2)];
          const v86 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 3)];
          const v87 = v82[stdlib.checkedBigNumberify('./index.rsh:136:13:array', stdlib.UInt_max, 4)];
          if (v86) {
            const txn3 = await (ctc.recv('Player', 6, 0, [], false, false));
            const [] = txn3.data;
            const v91 = txn3.value;
            const v96 = txn3.time;
            const v90 = txn3.from;
            const v92 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v92, {
              at: './index.rsh:142:24:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'pay amount correct',
              who: 'Player'
               });
            const v93 = stdlib.addressEq(v6, v90);
            stdlib.assert(v93, {
              at: './index.rsh:142:24:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'sender correct',
              who: 'Player'
               });
            const v95 = stdlib.add(v75, v91);
            const txn4 = await (ctc.sendrecv('Player', 7, 0, stdlib.checkedBigNumberify('./index.rsh:146:22:dot', stdlib.UInt_max, 6), [stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt], [v6, v8, v16, v17, v85, v95, v96], v85, [], true, false, false, ((txn4) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:146:22:dot', stdlib.UInt_max, 6), v6, v8, v16, v17, v85, v95, v96]);
              sim_r.prevSt_noPrevTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:146:22:dot', stdlib.UInt_max, 6), v6, v8, v16, v17, v85, v95]);
              const [] = txn4.data;
              const v101 = txn4.value;
              const v105 = txn4.time;
              const v100 = txn4.from;
              
              const v102 = stdlib.eq(v101, v85);
              stdlib.assert(v102, {
                at: './index.rsh:146:22:dot',
                fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
                msg: 'pay amount correct',
                who: 'Player'
                 });
              stdlib.assert(true, {
                at: './index.rsh:146:22:dot',
                fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
                msg: 'sender correct',
                who: 'Player'
                 });
              const v104 = stdlib.add(v95, v101);
              const v107 = stdlib.add(v16, stdlib.checkedBigNumberify('./index.rsh:147:39:decimal', stdlib.UInt_max, 1));
              const v110 = stdlib.add(v17, v85);
              const v125 = [v107, v110];
              v21 = v125;
              const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
              const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
              const cv16 = v128;
              const cv17 = v129;
              const cv139 = v104;
              const cv140 = v105;
              const cv141 = v96;
              
              (() => {
                const v16 = cv16;
                const v17 = cv17;
                const v139 = cv139;
                const v140 = cv140;
                const v141 = cv141;
                
                if ((() => {
                  const v20 = stdlib.lt(v16, v8);
                  
                  return v20; })()) {
                  let v21;
                  sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139, v140]);
                  sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([stdlib.T_UInt, stdlib.T_Address, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt, stdlib.T_UInt]), [stdlib.checkedBigNumberify('./index.rsh:122:22:after expr stmt semicolon', stdlib.UInt_max, 2), v6, v8, v16, v17, v139]);
                  sim_r.isHalt = false;
                   }
                else {
                  sim_r.txns.push({
                    amt: v139,
                    to: v6
                     });
                  sim_r.nextSt = stdlib.digest(stdlib.T_Tuple([]), []);
                  sim_r.nextSt_noTime = stdlib.digest(stdlib.T_Tuple([]), []);
                  sim_r.isHalt = true;
                   } })();
              return sim_r;
               })));
            const [] = txn4.data;
            const v101 = txn4.value;
            const v105 = txn4.time;
            const v100 = txn4.from;
            const v102 = stdlib.eq(v101, v85);
            stdlib.assert(v102, {
              at: './index.rsh:146:22:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'pay amount correct',
              who: 'Player'
               });
            stdlib.assert(true, {
              at: './index.rsh:146:22:dot',
              fs: ['at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)'],
              msg: 'sender correct',
              who: 'Player'
               });
            const v104 = stdlib.add(v95, v101);
            const v107 = stdlib.add(v16, stdlib.checkedBigNumberify('./index.rsh:147:39:decimal', stdlib.UInt_max, 1));
            const v110 = stdlib.add(v17, v85);
            const v125 = [v107, v110];
            v21 = v125;
            const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
            const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
            const cv16 = v128;
            const cv17 = v129;
            const cv139 = v104;
            const cv140 = v105;
            const cv141 = v96;
            
            v16 = cv16;
            v17 = cv17;
            v139 = cv139;
            v140 = cv140;
            v141 = cv141;
            
            continue;
            
             }
          else {
            const v126 = [v16, v17];
            v21 = v126;
            const v128 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 0)];
            const v129 = v21[stdlib.checkedBigNumberify('./index.rsh:121:11:array', stdlib.UInt_max, 1)];
            const cv16 = v128;
            const cv17 = v129;
            const cv139 = v75;
            const cv140 = v76;
            const cv141 = v140;
            
            v16 = cv16;
            v17 = cv17;
            v139 = cv139;
            v140 = cv140;
            v141 = cv141;
            
            continue; }
          break;
           }
         } }
     }
  ;
  return;
  
   }

const _ALGO = {
  appApproval: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 2 Args 0
==
assert
byte base64(bA==)
app_global_get
gtxna 2 Args 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 2 Args 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 2 Args 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 7
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 2
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 2
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn CloseRemainderTo
global ZeroAddress
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 97, 0, 0, 203, 145, 153, 153],
  steps: [null, `#pragma version 2
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 7
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:116:14:dot"
// "[]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:116:14:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
arg 3
btoi
-
+
store 255
// Nothing
// "./index.rsh:117:12:application"
// "[]"
arg 6
btoi
int 0
>
assert
int 0
arg 6
btoi
<
bz l0
// compute state in HM_Set 2
int 2
itob
gtxn 3 Sender
concat
arg 6
concat
int 0
itob
concat
int 0
itob
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 3 Sender
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 2
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 11
==
assert
// compute state in HM_Check 2
int 2
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 9
concat
keccak256
arg 0
==
assert
// Run body
arg 10
byteget 0
int 0
==
bz l1
arg 10
substring 1 58
store 251
int 0
store 252
l1:
l0:
// Just "pay amount correct"
// "./index.rsh:122:22:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
gtxn 3 Amount
arg 3
btoi
-
load 252
==
assert
// Just "sender correct"
// "./index.rsh:122:22:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
int 1
assert
arg 9
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 251
arg 10
byteget 0
int 0
==
bz l3
arg 10
substring 1 58
store 249
int 1
store 250
l3:
l2:
// Nothing
// "./index.rsh:122:22:application"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
load 250
assert
arg 10
byteget 0
int 0
==
bz l5
arg 10
substring 1 58
dup
store 249
substring 16 24
btoi
store 248
load 249
substring 24 25
btoi
bz l6
// compute state in HM_Set 4
int 4
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
load 251
itob
concat
load 248
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l6:
arg 7
arg 8
concat
dup
store 253
substring 0 8
btoi
store 247
load 253
substring 8 16
btoi
store 246
load 247
arg 6
btoi
<
bz l7
// compute state in HM_Set 2
int 2
itob
arg 5
concat
arg 6
concat
load 247
itob
concat
load 246
itob
concat
load 251
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l7:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
arg 5
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
btoi
int 1
==
assert
b done
l5:
l4:
// Check GroupSize
global GroupSize
int 5
==
assert
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
arg 4
btoi
int 30
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 2
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 10
==
assert
// compute state in HM_Check 2
int 2
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 9
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:155:20:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:155:20:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
arg 5
gtxn 3 Sender
==
assert
arg 9
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 254
arg 7
arg 8
concat
dup
store 255
substring 0 8
btoi
store 253
load 255
substring 8 16
btoi
store 252
load 253
arg 6
btoi
<
bz l0
// compute state in HM_Set 2
int 2
itob
arg 5
concat
arg 6
concat
load 253
itob
concat
load 252
itob
concat
load 254
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
arg 5
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
arg 4
btoi
int 30
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 2
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 11
==
assert
// compute state in HM_Check 4
int 4
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 9
concat
arg 10
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:142:24:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
gtxn 3 Amount
arg 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:142:24:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
arg 5
gtxn 3 Sender
==
assert
arg 9
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 255
// compute state in HM_Set 6
int 6
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 10
concat
load 255
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
arg 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
txn NumArgs
int 11
==
assert
// compute state in HM_Check 6
int 6
itob
arg 5
concat
arg 6
concat
arg 7
concat
arg 8
concat
arg 9
concat
arg 10
concat
keccak256
arg 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:146:22:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
gtxn 3 Amount
arg 3
btoi
-
arg 9
btoi
==
assert
// Just "sender correct"
// "./index.rsh:146:22:dot"
// "[at ./index.rsh:122:22:application call to [unknown function] (defined at: ./index.rsh:122:22:function exp)]"
int 1
assert
arg 10
btoi
gtxn 3 Amount
arg 3
btoi
-
+
store 254
arg 7
btoi
int 1
+
itob
arg 8
btoi
arg 9
btoi
+
itob
concat
dup
store 255
substring 0 8
btoi
store 253
load 255
substring 8 16
btoi
store 252
load 253
arg 6
btoi
<
bz l0
// compute state in HM_Set 2
int 2
itob
arg 5
concat
arg 6
concat
load 253
itob
concat
load 252
itob
concat
load 254
itob
concat
keccak256
arg 1
==
assert
arg 2
btoi
int 0
==
assert
b done
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
arg 5
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
arg 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
arg 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v7",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T2",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem3",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint8[32]",
                        "name": "elem4",
                        "type": "uint8[32]"
                      }
                    ],
                    "internalType": "struct ReachContract.T1",
                    "name": "_Player",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct ReachContract.T2",
                "name": "v61",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.a4msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a4postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v7",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum ReachContract._enum_T2",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem3",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint8[32]",
                        "name": "elem4",
                        "type": "uint8[32]"
                      }
                    ],
                    "internalType": "struct ReachContract.T1",
                    "name": "_Player",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct ReachContract.T2",
                "name": "v61",
                "type": "tuple"
              }
            ],
            "internalType": "struct ReachContract.a4msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a4postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v6",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v8",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v16",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v17",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a6postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b61109f806100ab6000396000f3fe60806040526004361061004a5760003560e01c806310f48adc1461004f5780634ed4888c146100645780637a233566146100775780638af465b61461008a57806390aeefee1461009d575b600080fd5b61006261005d366004610d2e565b6100b0565b005b610062610072366004610d62565b61019e565b610062610085366004610d3f565b6102d9565b610062610098366004610d51565b6105fc565b6100626100ab366004610d62565b61076d565b6040516100c4906000908390602001610f65565b6040516020818303038152906040528051906020012060001c600054146100ea57600080fd5b34156100f557600080fd5b604081013561010357600080fd5b7f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e9816040516101329190610e65565b60405180910390a16101426109b8565b8051339052805160408301356020918201528082018051600090819052905190910181905261017290349061102f565b6020820180516040019190915280514360609091015251823560809091015261019a816108ae565b5050565b6040516101b2906004908390602001610fdb565b6040516020818303038152906040528051906020012060001c600054146101d857600080fd5b6101e06109dd565b34156101eb57600080fd5b336101f96020840184610c29565b6001600160a01b03161461020c57600080fd5b61021a34608084013561102f565b81526040517f91c4bd2137e989587f413dc7e9ecaabca71de762779551efc1cff07c61a7d4519061024c908490610f57565b60405180910390a161025c6109f0565b6102696020840184610c29565b6001600160a01b0316815260208084013581830152604080850135818401526060808601359084015260c0808601356080850152845160a08501524390840152516102b991600691849101610ff0565b60408051601f198184030181529190528051602090910120600055505050565b6040516102ed906002908390602001610f74565b6040516020818303038152906040528051906020012060001c6000541461031357600080fd5b61031b610a36565b61032a601e60a084013561102f565b431061033557600080fd5b600061034760e0840160c08501610c4a565b801561036357634e487b7160e01b600052602160045260246000fd5b14156103885761037b36839003830160e08401610c64565b6040820152600060208201525b8060200151341461039857600080fd5b6103a634608084013561102f565b606082015260006103bd60e0840160c08501610c4a565b80156103d957634e487b7160e01b600052602160045260246000fd5b14156103fe576103f136839003830160e08401610c64565b60a0820152600160808201525b806080015161040c57600080fd5b600061041e60e0840160c08501610c4a565b801561043a57634e487b7160e01b600052602160045260246000fd5b141561019a5761045236839003830160e08401610c64565b60c08201819052604081015160e0830152606001511561052a577f52074a4ba06572408cc10c0eaf80fc51d820559f82221e01f0c8acd1c83eeacc8260405161049b9190610e86565b60405180910390a16104ab6109f0565b6104b86020840184610c29565b6001600160a01b0316815260208084013581830152604080850135818401526060808601358185015284015160808401524360a084015260e084015160c08401525161050991600491849101610ff0565b60408051601f198184030181529190528051602090910120600055506105f7565b610100810180516040808501359091528151606085013560209091015290518252517f52074a4ba06572408cc10c0eaf80fc51d820559f82221e01f0c8acd1c83eeacc90610579908490610e86565b60405180910390a16105896109b8565b6105966020840184610c29565b81516001600160a01b03909116905280516020808501359181019190915282515181830180519190915283518201518151909201919091526060808401518251604001528151439101525160a08401356080909101526105f5816108ae565b505b61019a565b604051610610906002908390602001610f74565b6040516020818303038152906040528051906020012060001c6000541461063657600080fd5b61063e610a9a565b61064d601e60a084013561102f565b431015801561065a575060015b61066357600080fd5b341561066e57600080fd5b3361067c6020840184610c29565b6001600160a01b03161461068f57600080fd5b6020808201805160408086013590915281516060860135930192909252518252517f7e9c91e349c21fefe9578455c85a00f9234893b6f32ec0a520c4c6e8928d61d4906106dd908490610f43565b60405180910390a16106ed6109b8565b6106fa6020840184610c29565b81516001600160a01b039091169052805160208085013591810191909152825151818301805191909152835182015190519091015261073d34608085013561102f565b602082018051604001919091528051436060909101525160a0840135608090910152610768816108ae565b505050565b604051610781906006908390602001610fdb565b6040516020818303038152906040528051906020012060001c600054146107a757600080fd5b6107af610a9a565b346080830135146107bf57600080fd5b6107ce6001604084013561102f565b6020820151526107e66080830135606084013561102f565b60208083018051909101919091525181526040517f6b23999ba71c4c8ece052db9681962af90f9a94c1da9ed06e3c49bcf3e02236990610827908490610f57565b60405180910390a16108376109b8565b6108446020840184610c29565b81516001600160a01b03909116905280516020808501359181019190915282515181830180519190915283518201519051909101526108873460a085013561102f565b602082018051604001919091528051436060909101525160c0840135608090910152610768815b6108b6610aba565b81516020908101519083015151101561094e576108d1610acd565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518301516060808601919091528251820151608086015291519091015160a08401525161092d91600291849101610f88565b60408051601f1981840301815291905280516020909101206000555061019a565b610956610b0c565b82515181516001600160a01b039182169052602080850151604090810151845183015283518051920151905161076893859316916108fc811502916000818181858888f193505050501580156109b0573d6000803e3d6000fd5b506000805533ff5b60405180604001604052806109cb610b1b565b81526020016109d8610b32565b905290565b6040518060200160405280600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280610a4a610b61565b815260200160008152602001610a5e610b7b565b81526000602082018190526040820152606001610a79610b7b565b8152602001610a86610b7b565b8152602001600081526020016109d8610b61565b6040518060400160405280610aad610b61565b81526020016109d8610b61565b60405180602001604052806109d8610b61565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180602001604052806109d85b604080518082019091526000808252602082015290565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6040518060a001604052806000815260200160008152602001600081526020016000151581526020016109d86040518061040001604052806020906020820280368337509192915050565b80356001600160a01b0381168114610bdd57600080fd5b919050565b80358015158114610bdd57600080fd5b803560018110610bdd57600080fd5b600060e08284031215610c12578081fd5b50919050565b803560ff81168114610bdd57600080fd5b600060208284031215610c3a578081fd5b610c4382610bc6565b9392505050565b600060208284031215610c5b578081fd5b610c4382610bf2565b6000610480808385031215610c77578182fd5b60405160a0810181811067ffffffffffffffff82111715610c9a57610c9a611053565b8060405250833581526020808501358183015260408501356040830152610cc360608601610be2565b606083015285609f860112610cd6578384fd5b610ce1610400611005565b8060808701888689011115610cf4578687fd5b8695505b83861015610d1d57610d0981610c18565b835260019590950194918301918301610cf8565b506080840152509095945050505050565b600060608284031215610c12578081fd5b60006105608284031215610c12578081fd5b600060c08284031215610c12578081fd5b600060e08284031215610d73578081fd5b610c438383610c01565b6001600160a01b03610d8e82610bc6565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03610dd882610bc6565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b80516001600160a01b031682526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0818101519083015260c090810151910152565b81358152602080830135908201526040918201359181019190915260600190565b6105608101610e958284610d7d565b610ea160c08401610bf2565b6001808210610ec057634e487b7160e01b600052602160045260246000fd5b60c084019190915260e084810135908401526101008085013590840152610120808501359084015261014090610ef7828601610be2565b1515828501526101609150818401828601925060005b6020808210610f1c5750610f39565b60ff610f2786610c18565b16835293840193909101908201610f0d565b5050505092915050565b60c08101610f518284610d7d565b92915050565b60e08101610f518284610dc7565b91825235602082015260400190565b82815260e08101610c436020830184610d7d565b600060e08201905083825260018060a01b038351166020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a083015160c08301529392505050565b8281526101008101610c436020830184610dc7565b8281526101008101610c436020830184610e1b565b60405181810167ffffffffffffffff8111828210171561102757611027611053565b604052919050565b6000821982111561104e57634e487b7160e01b81526011600452602481fd5b500190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220a28af6db17397fc748bb705e7234e732d1b03a3a0a6727d25933af722df75a4264736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

