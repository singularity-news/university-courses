
// LZ-String 1.5.0 (MIT License)
// Copyright (c) 2013 pieroxy
var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);


/* ===========================================================
SCORM API Handler - Unified Single-SCO Version
Works identically for both SCORM 1.2 and SCORM 2004.
No sequencing or navigation - all lessons in one SCO.
Uses lz-string compression for suspend_data.
Falls back to localStorage when SCORM API unavailable.
=============================================================== */

var SCORMHandler = (function() {
  var scorm = (typeof pipwerks !== 'undefined' && pipwerks.SCORM) ? pipwerks.SCORM : null;
  var lmsConnected = false;
  var scormQuit = false;   // true only after scorm.quit() has been called
  var isExiting = false;   // true once suspend/complete has started (prevents duplicate calls)
  var sessionStartTime = null;
  var courseData = null;
  var effectiveSettings = {};
  var isHtmlExport = false;

  var currentLessonIndex = 0;
  var currentSlideIndex = 0;
  var totalPossiblePoints = 0;
  var totalEarnedPoints = 0;
  var masteryScore = 0.7;
  var completedLessons = [];
  var lessonLocations = {};
  var answeredQuestions = {};
  var interactionCount = 0;
  var slidePoints = {};
  var maxSlidePoints = {};
  var completionMode = 'lastSlide';

  var storageKey = 'quikauthor_scorm_state';

  function log(message) {
    if (typeof pipwerks !== 'undefined' && pipwerks.debug && pipwerks.debug.isActive) {
      if (window.console && window.console.log) {
        window.console.log("SCORM Handler: " + message);
      }
    } else if (window.console && window.console.log) {
      window.console.log("SCORM Handler: " + message);
    }
  }

  function compressState(state) {
    try {
      var jsonStr = JSON.stringify(state);
      var compressed = LZString.compressToEncodedURIComponent(jsonStr);
      log('State compressed: ' + jsonStr.length + ' -> ' + compressed.length + ' chars');
      return compressed;
    } catch (e) {
      log('Compression error: ' + e.message);
      return JSON.stringify(state);
    }
  }

  function decompressState(data) {
    if (!data || data === 'null' || data === 'undefined' || data === '') return null;
    try {
      var jsonStr = LZString.decompressFromEncodedURIComponent(data);
      if (jsonStr) return JSON.parse(jsonStr);
      return JSON.parse(data);
    } catch (e) {
      log('Decompression error: ' + e.message);
      return null;
    }
  }

  function getStateObject() {
    return {
      currentLessonIndex: currentLessonIndex,
      currentSlideIndex: currentSlideIndex,
      earnedPoints: totalEarnedPoints,
      completedLessons: completedLessons,
      lessonLocations: lessonLocations,
      answeredQuestions: answeredQuestions,
      interactionCount: interactionCount,
      slidePoints: slidePoints,
      maxSlidePoints: maxSlidePoints,
      timestamp: Date.now()
    };
  }

  function restoreState(state) {
    if (!state) return;
    if (typeof state.currentLessonIndex === 'number') currentLessonIndex = state.currentLessonIndex;
    if (typeof state.currentSlideIndex === 'number') currentSlideIndex = state.currentSlideIndex;
    if (typeof state.earnedPoints === 'number') totalEarnedPoints = state.earnedPoints;
    if (Array.isArray(state.completedLessons)) completedLessons = state.completedLessons;
    if (state.lessonLocations && typeof state.lessonLocations === 'object') lessonLocations = state.lessonLocations;
    if (state.answeredQuestions && typeof state.answeredQuestions === 'object') answeredQuestions = state.answeredQuestions;
    if (typeof state.interactionCount === 'number') interactionCount = state.interactionCount;
    if (state.slidePoints && typeof state.slidePoints === 'object') slidePoints = state.slidePoints;
    if (state.maxSlidePoints && typeof state.maxSlidePoints === 'object') maxSlidePoints = state.maxSlidePoints;
    log('State restored: lesson=' + currentLessonIndex + ', slide=' + currentSlideIndex +
        ', points=' + totalEarnedPoints + ', completed=' + completedLessons.length);
  }

  function saveToLocalStorage() {
    try {
      localStorage.setItem(storageKey, compressState(getStateObject()));
      log('State saved to localStorage');
      return true;
    } catch (e) {
      log('localStorage save error: ' + e.message);
      return false;
    }
  }

  function loadFromLocalStorage() {
    try {
      var data = localStorage.getItem(storageKey);
      if (data) {
        var state = decompressState(data);
        if (state) { restoreState(state); log('State loaded from localStorage'); return true; }
      }
    } catch (e) { log('localStorage load error: ' + e.message); }
    return false;
  }

  // Save state - only skip if the SCORM session has already been terminated via quit()
  function saveState() {
    if (scormQuit) {
      log('SCORM session already terminated, skipping saveState');
      return;
    }
    var compressed = compressState(getStateObject());
    if (lmsConnected) {
      scorm.set('cmi.suspend_data', compressed);
      scorm.save();
      log('State saved to LMS suspend_data');
    } else if (isHtmlExport) {
      saveToLocalStorage();
    }
  }

  function loadState() {
    if (lmsConnected) {
      var data = scorm.get('cmi.suspend_data');
      if (data && data !== '' && data !== 'null') {
        var state = decompressState(data);
        if (state) { restoreState(state); log('State loaded from LMS suspend_data'); return true; }
      }
    } else if (isHtmlExport) {
      return loadFromLocalStorage();
    }
    return false;
  }

  function updateScore() {
    if (!lmsConnected || !scorm) return;
    if (scorm.version === '1.2') {
      scorm.set('cmi.core.score.raw', String(totalEarnedPoints));
      scorm.set('cmi.core.score.max', String(totalPossiblePoints));
      scorm.set('cmi.core.score.min', '0');
    } else {
      scorm.set('cmi.score.raw', String(totalEarnedPoints));
      scorm.set('cmi.score.max', String(totalPossiblePoints));
      scorm.set('cmi.score.min', '0');
      if (totalPossiblePoints > 0) {
        scorm.set('cmi.score.scaled', (totalEarnedPoints / totalPossiblePoints).toFixed(2));
      }
    }
    scorm.save();
    log('Score updated: ' + totalEarnedPoints + '/' + totalPossiblePoints);
  }

  function getSlideMaxPoints(slide) {
    if (!slide || !slide.template) return 0;
    var simpleScorable = ['MultipleChoice', 'TrueOrFalse', 'PieChart', 'Slider', 'SelectImage',
      'MissingWords', 'NumberPicker', 'Ratio', 'NumberSentence', 'StrikeOut', 'Hotspot',
      'MultipleSelect', 'Dropdown', 'Memory', 'Reorder', 'SelectInOrder', 'SpotTheDifference',
      'Timeline', 'Categorization', 'DragDropMatching', 'TrueOrFalseImage', 'SentenceCorrection',
      'ImageDragDropLabeling', 'WordSearch', 'LetterJumble', 'TextHighlighter', 'ZoomAndIdentify'];
    if (simpleScorable.indexOf(slide.template) !== -1) return 1;
    switch (slide.template) {
      case 'QuickFire':
        return slide.questions ? Math.min(slide.questions.length, slide.numberOfQuestionsToShow || slide.questions.length) : 0;
      case 'MillionaireQuiz': case 'Millionaire': case 'Bullseye':
        return slide.questions ? slide.questions.length : 0;
      case 'SwipeGame': return slide.cards ? slide.cards.length : 0;
      case 'Jeopardy':
        return slide.categories ? slide.categories.reduce(function(acc, cat) {
          return acc + (cat.questions ? cat.questions.length : 0);
        }, 0) : 0;
      case 'Elevator':
        return slide.statements ? slide.statements.filter(function(s) { return s.isCorrect; }).length : 0;
      default: return 0;
    }
  }

  function initializeSlidePoints(lessons) {
    maxSlidePoints = {};
    var total = 0;
    if (lessons && Array.isArray(lessons)) {
      lessons.forEach(function(lesson) {
        if (lesson.slides) lesson.slides.forEach(function(slide) {
          if (slide.id) {
            var pts = getSlideMaxPoints(slide);
            if (pts > 0) { maxSlidePoints[slide.id] = pts; total += pts; }
          }
        });
      });
    }
    log('Slide max points: ' + Object.keys(maxSlidePoints).length + ' slides, ' + total + ' total');
  }

  function resolveScormResponses(slide, data, scormVersion) {
    var template = slide.template;
    var correctResponse = '';
    var learnerResponse = String(data.response || '');

    try {
      switch (template) {
        // ── Simple option lookup ──────────────────────────────────────────
        case 'MultipleChoice':
        case 'SentenceCorrection': {
          var correct = (slide.options || []).find(function(o) { return o.id === slide.correctOptionId; });
          correctResponse = correct ? (correct.id || correct.text || '') : '';
          var selected = (slide.options || []).find(function(o) { return o.id === data.response; });
          learnerResponse = selected ? (selected.id || selected.text || '') : learnerResponse;
          break;
        }

        case 'MultipleSelect': {
          correctResponse = (slide.correctOptionIds || []).join(',');
          learnerResponse = String(data.response || '').split(',').map(function(s) { return s.trim(); }).filter(Boolean).join(',');
          break;
        }

        case 'SelectImage': {
          correctResponse = slide.correctImageId || '';
          learnerResponse = String(data.response || '');
          break;
        }

        // ── True/False ────────────────────────────────────────────────────
        case 'TrueOrFalse':
        case 'TrueOrFalseImage': {
          correctResponse = slide.isTrue ? 'true' : 'false';
          learnerResponse = data.correct ? (slide.isTrue ? 'true' : 'false') : (slide.isTrue ? 'false' : 'true');
          break;
        }

        // ── Numeric ───────────────────────────────────────────────────────
        case 'NumberPicker':
        case 'Slider':
        case 'PieChart': {
          correctResponse = String(slide.correctAnswer || '');
          // learnerResponse is already the number string
          break;
        }

        case 'Ratio': {
          correctResponse = slide.correctRatioLeft + ':' + slide.correctRatioRight;
          // learnerResponse already in leftValue:rightValue format
          break;
        }

        // ── Questions array (Millionaire / Bullseye / QuickFire / TestOut) ─
        case 'MillionaireQuiz':
        case 'Bullseye':
        case 'QuickFire':
        case 'TestOut': {
          var question = (slide.questions || []).find(function(q) { return q.id === data.questionId; });
          if (question) {
            correctResponse = question.correctAnswerId || '';
            learnerResponse = String(data.response || '');
          }
          break;
        }

        // ── Jeopardy ──────────────────────────────────────────────────────
        case 'Jeopardy': {
          var allQuestions = (slide.categories || []).reduce(function(acc, c) {
            return acc.concat(c.questions || []);
          }, []);
          var jeopardyQuestion = allQuestions.find(function(q) { return q.id === data.questionId; });
          correctResponse = jeopardyQuestion ? (jeopardyQuestion.answer || '') : '';
          // learnerResponse is already 'correct'/'incorrect' — leave as-is
          break;
        }

        // ── SwipeGame ─────────────────────────────────────────────────────
        case 'SwipeGame': {
          var card = (slide.cards || []).find(function(c) { return c.id === data.questionId; });
          correctResponse = card ? (card.correctDirection || '') : '';
          learnerResponse = String(data.response || '');
          break;
        }

        // ── MissingWords ──────────────────────────────────────────────────
        case 'MissingWords': {
          correctResponse = (slide.answers || []).join(', ');
          var userAnswers = String(data.response || '').split(',').filter(Boolean);
          learnerResponse = userAnswers.join(', ');
          break;
        }

        // ── LetterJumble ──────────────────────────────────────────────────
        case 'LetterJumble': {
          correctResponse = slide.solutionString || '';
          var rawLJ = String(data.response || '');
          if (rawLJ === 'timeout') learnerResponse = 'Timed out';
          else if (rawLJ === 'gave_up') learnerResponse = 'Gave up';
          else learnerResponse = rawLJ;
          break;
        }

        // ── WordSearch ────────────────────────────────────────────────────
        case 'WordSearch': {
          correctResponse = (slide.words || []).join(', ');
          var rawWS = String(data.response || '');
          if (rawWS === 'completed') learnerResponse = 'Found all words';
          else if (rawWS === 'time_up') learnerResponse = 'Timed out';
          else if (rawWS === 'gave_up') learnerResponse = 'Gave up';
          break;
        }

        // ── Reorder / SelectInOrder ───────────────────────────────────────
        case 'Reorder':
        case 'SelectInOrder': {
          var seqDelimiter = scormVersion === '1.2' ? ',' : '[,]';
          correctResponse = (slide.items || []).map(function(i) { return i.id; }).join(seqDelimiter);
          var orderedIds = String(data.response || '').split(',').filter(Boolean);
          learnerResponse = orderedIds.join(seqDelimiter);
          break;
        }

        // ── Dropdown ──────────────────────────────────────────────────────
        case 'Dropdown': {
          var correctPartsD = (slide.dropdowns || []).map(function(dd) {
            var correctD = (dd.options || []).find(function(o) { return o.id === dd.correctOptionId; });
            return correctD ? (correctD.text || '') : '';
          });
          correctResponse = correctPartsD.join(' | ');
          try {
            var selectedIdsD = JSON.parse(String(data.response || '{}'));
            var selectedPartsD = (slide.dropdowns || []).map(function(dd, idx) {
              var selectedId = selectedIdsD[String(idx)] || selectedIdsD[idx];
              var selectedD = (dd.options || []).find(function(o) { return o.id === selectedId; });
              return selectedD ? (selectedD.text || '') : '';
            });
            learnerResponse = selectedPartsD.join(' | ');
          } catch (e) {}
          break;
        }

        // ── Categorization ────────────────────────────────────────────────
        case 'Categorization': {
          var catMap = {};
          (slide.items || []).forEach(function(item) {
            var cat = (slide.categories || []).find(function(c) { return c.id === item.categoryId; });
            var catName = cat ? (cat.name || item.categoryId) : item.categoryId;
            if (!catMap[catName]) catMap[catName] = [];
            catMap[catName].push(item.text);
          });
          correctResponse = Object.keys(catMap)
            .map(function(cat) { return cat + ': ' + catMap[cat].join(', '); })
            .join(' | ');
          try {
            var placedC = JSON.parse(String(data.response || '{}'));
            var placedMapC = {};
            Object.keys(placedC).forEach(function(catId) {
              var catC = (slide.categories || []).find(function(c) { return c.id === catId; });
              var catNameC = catC ? (catC.name || catId) : catId;
              if (!placedMapC[catNameC]) placedMapC[catNameC] = [];
              (placedC[catId] || []).forEach(function(item) {
                placedMapC[catNameC].push(item.text || item.id || '');
              });
            });
            learnerResponse = Object.keys(placedMapC)
              .map(function(cat) { return cat + ': ' + placedMapC[cat].join(', '); })
              .join(' | ');
          } catch (e) {}
          break;
        }

        // ── DragDropMatching ──────────────────────────────────────────────
        case 'DragDropMatching': {
          var correctPairsObj = slide.correctPairs || {};
          var correctParts = [];
          Object.keys(correctPairsObj).forEach(function(itemId) {
            var targetId = correctPairsObj[itemId];
            var itemM = (slide.items || []).find(function(i) { return i.id === itemId; });
            var targetM = (slide.targets || []).find(function(t) { return t.id === targetId; });
            var itemName = itemM ? (itemM.content && itemM.content.value || itemM.text || itemId) : itemId;
            var targetName = targetM ? (targetM.content && targetM.content.value || targetM.text || targetId) : targetId;
            correctParts.push(itemName + ' > ' + targetName);
          });
          correctResponse = correctParts.join(' | ');
          try {
            var placedM = JSON.parse(String(data.response || '{}'));
            var placedPairsM = [];
            Object.keys(placedM).forEach(function(targetId) {
              var targetMP = (slide.targets || []).find(function(t) { return t.id === targetId; });
              var targetName = targetMP ? (targetMP.content && targetMP.content.value || targetMP.text || targetId) : targetId;
              (placedM[targetId] || []).forEach(function(item) {
                var itemName = (item.content && item.content.value) || item.text || item.id || '';
                placedPairsM.push(itemName + ' > ' + targetName);
              });
            });
            learnerResponse = placedPairsM.join(' | ');
          } catch (e) {}
          break;
        }

        // ── ImageDragDropLabeling ─────────────────────────────────────────
        case 'ImageDragDropLabeling': {
          var correctPairsL = (slide.correctPairs || []).map(function(pair) {
            var labelL = (slide.labels || []).find(function(l) { return l.id === pair.labelId; });
            var zoneL = (slide.zones || []).find(function(z) { return z.id === pair.zoneId; });
            return (labelL ? (labelL.text || '') : pair.labelId) + ' → ' + (zoneL ? (zoneL.text || '') : pair.zoneId);
          });
          correctResponse = correctPairsL.join(' | ');
          try {
            var placedL = JSON.parse(String(data.response || '[]'));
            var placedPairsL = placedL.map(function(pair) {
              var labelLP = (slide.labels || []).find(function(l) { return l.id === pair.labelId; });
              var zoneLP = (slide.zones || []).find(function(z) { return z.id === pair.zoneId; });
              return (labelLP ? (labelLP.text || '') : pair.labelId) + ' → ' + (zoneLP ? (zoneLP.text || '') : pair.zoneId);
            });
            learnerResponse = placedPairsL.join(' | ');
          } catch (e) {
            // leave as raw
          }
          break;
        }

        // ── StrikeOut ─────────────────────────────────────────────────────
        case 'StrikeOut': {
          correctResponse = (slide.items || [])
            .filter(function(i) { return i.isCorrect; })
            .map(function(i) { return i.text; })
            .join(', ');
          var selectedIdsS = String(data.response || '').split(',').filter(Boolean);
          learnerResponse = selectedIdsS
            .map(function(id) {
              var itemS = (slide.items || []).find(function(i) { return i.id === id; });
              return itemS ? (itemS.text || '') : id;
            })
            .join(', ');
          break;
        }

        // ── Elevator ──────────────────────────────────────────────────────
        case 'Elevator': {
          correctResponse = (slide.statements || [])
            .filter(function(s) { return s.isCorrect; })
            .map(function(s) { return s.text; })
            .join(', ');
          var selectedIdsE = String(data.response || '').split(',').filter(Boolean);
          learnerResponse = selectedIdsE
            .map(function(id) {
              var stmtE = (slide.statements || []).find(function(s) { return s.id === id; });
              return stmtE ? (stmtE.text || '') : id;
            })
            .join(', ');
          break;
        }

        // ── TextHighlighter ───────────────────────────────────────────────
        case 'TextHighlighter': {
          correctResponse = 'See correct highlights in lesson';
          // learnerResponse left as raw JSON ranges — no readable alternative without source text
          break;
        }

        default:
          // No resolution — leave both as-is
          break;
      }
    } catch (err) {
      // Never crash the SCORM handler — fall back to raw values
      correctResponse = correctResponse || '';
      learnerResponse = learnerResponse || String(data.response || '');
    }

    return { correctResponse: correctResponse, learnerResponse: learnerResponse };
  }

  function resolveScormType(template, scormVersion) {
    switch (template) {
      case 'TrueOrFalse':
      case 'TrueOrFalseImage':
        return 'true-false';
      case 'NumberPicker':
      case 'Slider':
      case 'PieChart':
        return 'numeric';
      case 'MissingWords':
      case 'SentenceCorrection':
      case 'LetterJumble':
      case 'Ratio':
        return 'fill-in';
      case 'MultipleChoice':
      case 'MultipleSelect':
      case 'SelectImage':
      case 'MillionaireQuiz':
      case 'Bullseye':
      case 'QuickFire':
      case 'TestOut':
      case 'SwipeGame':
        return 'choice';
      case 'Reorder':
      case 'SelectInOrder':
        return 'sequencing';
      default:
        return scormVersion === '1.2' ? 'performance' : 'other';
    }
  }

  return {
    init: function(config) {
      log('init() called.');
      sessionStartTime = new Date();
      courseData = config.courseData;
      effectiveSettings = config.effectiveSettings || {};
      masteryScore = (effectiveSettings.passRate || 70) / 100;
      completionMode = effectiveSettings.completionMode || 'lastSlide';
      totalPossiblePoints = config.totalPossiblePoints || 0;
      isHtmlExport = config.standardsType === 'html';
      isExiting = false;
      scormQuit = false;
      log('Standards type: ' + (config.standardsType || 'unknown') + ', isHtmlExport: ' + isHtmlExport);

      if (config.lessons) initializeSlidePoints(config.lessons);

      if (isHtmlExport && courseData && courseData.id) {
        var exportTimestamp = config.exportTimestamp || '';
        storageKey = 'quikauthor_' + courseData.id + (exportTimestamp ? '_' + exportTimestamp : '');
      }

      try {
        if (scorm) {
          lmsConnected = scorm.init();
          log('SCORM init() returned: ' + lmsConnected + ', Version: ' + scorm.version);

          if (lmsConnected) {
            var currentStatus = scorm.version === '1.2'
              ? scorm.get('cmi.core.lesson_status')
              : scorm.get('cmi.completion_status');

            if (!currentStatus || currentStatus === 'not attempted' || currentStatus === 'unknown') {
              if (scorm.version === '1.2') {
                scorm.set('cmi.core.lesson_status', 'incomplete');
              } else {
                scorm.set('cmi.completion_status', 'incomplete');
              }
              scorm.save();
              log('Set status to incomplete (was ' + (currentStatus || 'empty') + ')');
            }

            loadState();

            return {
              lessonIndex: currentLessonIndex,
              slideIndex: currentSlideIndex,
              earnedPoints: totalEarnedPoints,
              completedLessons: completedLessons,
              answeredQuestions: answeredQuestions
            };
          }
        }
      } catch (e) {
        log('Error during SCORM init: ' + e.message);
        lmsConnected = false;
      }

      if (!lmsConnected && isHtmlExport) {
        loadFromLocalStorage();
      }

      return {
        lessonIndex: currentLessonIndex,
        slideIndex: currentSlideIndex,
        earnedPoints: totalEarnedPoints,
        completedLessons: completedLessons,
        answeredQuestions: answeredQuestions
      };
    },

    recordQuestionAnswer: function(data) {
      var questionId = data.questionId;
      var slideId = data.slideId || questionId;
      var answerKey = slideId + '_' + questionId;

      if (answeredQuestions[answerKey]) {
        log('Question already answered: ' + answerKey);
        return false;
      }

      var currentSlidePoints = slidePoints[slideId] || 0;
      var maxPoints = maxSlidePoints[slideId] || 1;
      var pointsToAward = 0;

      if (data.correct && currentSlidePoints < maxPoints) {
        pointsToAward = Math.min(data.score, maxPoints - currentSlidePoints);
        slidePoints[slideId] = currentSlidePoints + pointsToAward;
        totalEarnedPoints += pointsToAward;
      }

      answeredQuestions[answerKey] = {
        response: data.response,
        correct: data.correct,
        score: pointsToAward,
        originalScore: data.score,
        slideId: slideId,
        template: data.template,
        lessonIndex: currentLessonIndex,
        timestamp: Date.now()
      };

      if (lmsConnected && scorm) {
        var n = interactionCount;
        var slide = null;
        if (courseData && courseData.lessons) {
          courseData.lessons.forEach(function(l) {
            if (l.slides) l.slides.forEach(function(s) {
              if (s.id === slideId) slide = s;
            });
          });
        }

        var resolved = resolveScormResponses(slide || { template: data.template }, data, scorm.version);
        var scormType = resolveScormType(data.template, scorm.version);

        if (scorm.version === '1.2') {
          scorm.set('cmi.interactions.' + n + '.id', answerKey);
          scorm.set('cmi.interactions.' + n + '.type', scormType);
          scorm.set('cmi.interactions.' + n + '.student_response', resolved.learnerResponse);
          scorm.set('cmi.interactions.' + n + '.result', data.correct ? 'correct' : 'incorrect');
          scorm.set('cmi.interactions.' + n + '.correct_responses.0.pattern', resolved.correctResponse);
        } else {
          scorm.set('cmi.interactions.' + n + '.id', answerKey);
          scorm.set('cmi.interactions.' + n + '.type', scormType);
          scorm.set('cmi.interactions.' + n + '.learner_response', resolved.learnerResponse);
          scorm.set('cmi.interactions.' + n + '.result', data.correct ? 'correct' : 'incorrect');
          scorm.set('cmi.interactions.' + n + '.correct_responses.0.pattern', resolved.correctResponse);
          try {
            var now = new Date();
            var iso = now.getFullYear() + '-' +
              String(now.getMonth() + 1).padStart(2, '0') + '-' +
              String(now.getDate()).padStart(2, '0') + 'T' +
              String(now.getHours()).padStart(2, '0') + ':' +
              String(now.getMinutes()).padStart(2, '0') + ':' +
              String(now.getSeconds()).padStart(2, '0');
            scorm.set('cmi.interactions.' + n + '.timestamp', iso);
          } catch(e) {}
        }
        interactionCount++;
      }

      log('Question answered: ' + answerKey + ', Correct: ' + data.correct +
          ', Points: ' + pointsToAward + ' (' + (slidePoints[slideId] || 0) + '/' + maxPoints + ')' +
          ', Total: ' + totalEarnedPoints + '/' + totalPossiblePoints);

      updateScore();
      saveState();
      return true;
    },

    isQuestionAnswered: function(questionId, slideId) {
      var key = slideId ? (slideId + '_' + questionId) : questionId;
      return !!(answeredQuestions[key] || answeredQuestions[questionId]);
    },

    getQuestionAnswer: function(questionId, slideId) {
      var key = slideId ? (slideId + '_' + questionId) : questionId;
      return answeredQuestions[key] || answeredQuestions[questionId] || null;
    },

    getLessonAnswers: function(lessonIdx) {
      var answers = {};
      for (var qId in answeredQuestions) {
        if (answeredQuestions[qId].lessonIndex === lessonIdx) answers[qId] = answeredQuestions[qId];
      }
      return answers;
    },

    updateProgress: function(lessonIndex, slideIndex) {
      currentLessonIndex = lessonIndex;
      currentSlideIndex = slideIndex;
      lessonLocations[lessonIndex] = slideIndex;
      log('Progress: lesson=' + lessonIndex + ', slide=' + slideIndex);
      if (lmsConnected) {
        var location = lessonIndex + ':' + slideIndex;
        var locationField = scorm.version === '1.2' ? 'cmi.core.lesson_location' : 'cmi.location';
        scorm.set(locationField, location);
        scorm.save();
      }
      saveState();
    },

    markLessonComplete: function(lessonIndex) {
      if (completedLessons.indexOf(lessonIndex) === -1) {
        completedLessons.push(lessonIndex);
        log('Lesson ' + lessonIndex + ' marked complete. Total: ' + completedLessons.length);
        saveState();
      }
    },

    isLessonComplete: function(lessonIndex) {
      return completedLessons.indexOf(lessonIndex) !== -1;
    },

    getLessonLocation: function(lessonIndex) {
      return lessonLocations[lessonIndex] || 0;
    },

    setResumeSlide: function(lessonIndex, slideIndex) {
      log('Setting resume slide for lesson ' + lessonIndex + ' to ' + slideIndex);
      lessonLocations[lessonIndex] = slideIndex;
      if (currentLessonIndex === lessonIndex) currentSlideIndex = slideIndex;
      // Note: saveState() will be called by the following suspend() call
    },

    resetLesson: function(lessonIndex) {
      var targetLesson = (typeof lessonIndex === 'number') ? lessonIndex : currentLessonIndex;
      log('Resetting lesson ' + targetLesson + ' for retry...');

      var pointsToRemove = 0;
      var keysToRemove = [];
      var slidesToReset = {};

      for (var key in answeredQuestions) {
        if (answeredQuestions[key].lessonIndex === targetLesson) {
          pointsToRemove += answeredQuestions[key].score || 0;
          keysToRemove.push(key);
          var sid = answeredQuestions[key].slideId;
          if (sid) slidesToReset[sid] = true;
        }
      }

      keysToRemove.forEach(function(key) { delete answeredQuestions[key]; });
      for (var s in slidesToReset) { delete slidePoints[s]; }

      totalEarnedPoints = Math.max(0, totalEarnedPoints - pointsToRemove);
      currentSlideIndex = 0;
      lessonLocations[targetLesson] = 0;

      var idx = completedLessons.indexOf(targetLesson);
      if (idx !== -1) completedLessons.splice(idx, 1);

      updateScore();
      saveState();
      log('Lesson ' + targetLesson + ' reset: -' + keysToRemove.length + ' answers, -' + pointsToRemove + ' points. Total: ' + totalEarnedPoints);
    },

    suspend: function(totalLessonsCount) {
      if (isExiting) {
        log('Already exiting, ignoring duplicate suspend');
        return null;
      }
      isExiting = true;
      log('Suspending course...');

      // If current lesson is marked complete, advance resume point to next lesson
      if (completedLessons.indexOf(currentLessonIndex) !== -1) {
        var nextLessonIndex = currentLessonIndex + 1;
        if (totalLessonsCount && nextLessonIndex < totalLessonsCount) {
          log('Lesson complete - advancing resume point to lesson ' + nextLessonIndex);
          currentLessonIndex = nextLessonIndex;
          currentSlideIndex = lessonLocations[nextLessonIndex] || 0;
        }
      }

      // Save state NOW, before calling scorm.quit() which would invalidate the session.
      // We use saveState() directly since scormQuit is still false here.
      saveState();

      if (lmsConnected && scorm) {
        if (scorm.version === '1.2') {
          scorm.set('cmi.core.exit', 'suspend');
        } else {
          scorm.set('cmi.exit', 'suspend');
        }
        scorm.save();
        scormQuit = true;
        scorm.quit();
      }

      return null;
    },

    complete: function(totalLessons) {
      if (isExiting) return null;
      isExiting = true;
      log('Completing course...');

      var passMode = totalPossiblePoints > 0 ? 'score' : 'completion';
      var passed = false;

      if (passMode === 'score') {
        var scorePercent = totalEarnedPoints / totalPossiblePoints;
        passed = scorePercent >= masteryScore;
        log('Score: ' + totalEarnedPoints + '/' + totalPossiblePoints + ' (' + (scorePercent * 100).toFixed(0) + '%), Required: ' + (masteryScore * 100) + '%');
      } else {
        passed = true;
      }

      saveState();

      if (lmsConnected && scorm) {
        updateScore();
        if (scorm.version === '1.2') {
          scorm.set('cmi.core.lesson_status', passed ? 'passed' : 'failed');
          scorm.set('cmi.core.exit', '');
        } else {
          scorm.set('cmi.completion_status', 'completed');
          scorm.set('cmi.success_status', passed ? 'passed' : 'failed');
          scorm.set('cmi.progress_measure', '1');
          scorm.set('cmi.exit', 'normal');
        }
        scorm.save();
        scormQuit = true;
        scorm.quit();
      }

      if (!lmsConnected) {
        try { localStorage.removeItem(storageKey); } catch (e) {}
      }

      var cs = (effectiveSettings && effectiveSettings.completionStrings) || {};
      var str = {
        passedTitle:   cs.passedTitle   || 'Course Complete!',
        failedTitle:   cs.failedTitle   || 'Course Finished',
        passedMessage: cs.passedMessage || 'Congratulations! You have successfully completed the course.',
        failedMessage: cs.failedMessage || 'Course completed. Your score did not meet the passing requirement.',
        scoreLabel:    cs.scoreLabel    || 'Score'
      };

      var resultText = passed ? str.passedMessage : str.failedMessage;

      if (passMode === 'score') {
        resultText += ' ' + str.scoreLabel + ': ' + totalEarnedPoints + '/' + totalPossiblePoints +
                      ' (' + Math.round(totalEarnedPoints / totalPossiblePoints * 100) + '%)';
      }

      return { title: passed ? str.passedTitle : str.failedTitle, body: resultText, passed: passed };
    },

    setTotalPossiblePoints: function(points) { totalPossiblePoints = points; },
    getTotalEarnedPoints: function() { return totalEarnedPoints; },
    getTotalPossiblePoints: function() { return totalPossiblePoints; },
    getCompletedLessons: function() { return completedLessons.slice(); },
    getCurrentState: function() { return getStateObject(); },
    isConnected: function() { return lmsConnected; },
    getScormVersion: function() { return (lmsConnected && scorm) ? scorm.version : null; }
  };
})();
